import svgIcons from "./assets/svgFiles.js";
import { notFound } from "./notFound.js";
import { renderHeader } from "./header.js";
import apiRequest from "./apiRequest.js";
import type { Employee } from "./types.js";
import authChecker from "./guard.js";
import "./scss/style.scss";
import { getCurrUser, canEdit } from "./utils/commonUtils.js";
import "./scss/userDetailEdit.scss";

authChecker();

renderHeader();

document.addEventListener("DOMContentLoaded", async () => {
  const contentContainer = document.getElementById(
    "user-detail-container",
  ) as HTMLElement | null;

  if (!contentContainer) {
    return;
  }

  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const userId: string | null = params.get("id");

  if (!userId) {
    notFound();
    return;
  }

  const user: Employee | undefined = await apiRequest(`users/${userId}`, "GET");

  if (!user) {
    notFound();
    return;
  }

  const currentUser = getCurrUser<Employee>();

  async function saveUserInfo(container: HTMLElement) {
    const getValue = (id: string): any => {
      const el = document.getElementById(id) as HTMLInputElement | null;
      return el ? el.value : "";
    };

    const dateStr = getValue("edit-date");
    let dateObj = user?.date_birth;

    if (dateStr) {
      const [year, month, day] = dateStr.split("-").map(Number);
      dateObj = { day, month, year };
    }

    const payload: Partial<Employee> = {
      first_name: getValue("edit-first-name"),
      last_name: getValue("edit-last-name"),
      department: getValue("edit-dep"),
      building: getValue("edit-building"),
      room: getValue("edit-room"),
      desk_number: Number(getValue("edit-desk")),
      date_birth: dateObj,
      phone: getValue("edit-phone"),
      email: getValue("edit-email"),
      skype: getValue("edit-skype"),
      cnumber: getValue("edit-cnumber"),
    };

    try {
      const updatedUser = await apiRequest<Employee>(
        `users/${userId}`,
        "PATCH",
        payload,
      );

      if (updatedUser) {
        container.innerHTML = "";
        readOnlyUserDetail(container, updatedUser, currentUser);
      }
    } catch (error) {
      console.error("Failed update");
    }
  }

  function readOnlyUserDetail(
    container: HTMLElement,
    user: Employee,
    currentUser: Employee | null,
  ) {
    const rawHTML = `
           <div id="user-detail-container" >
            <div id="user-profile-detail">
                <button id="back-btn">
                <svg width="25px" height="25px" viewBox="0 0 1024 1024" fill="#777" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z" fill=""></path></g></svg>
                </button>

                <img id="u-avatar" alt="User avatar"/>

                <h1><span id="u-first-name"></span> <span id="u-last-name"></span></h1> 
                <p id="u-native-name"></p>

               <button id="copy-btn">
                <svg fill: currentColor width="12px" height="12px" viewBox="0 0 512 512" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#777" stroke="#777"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#777;} .st1{fill:#77777;} </style> <g> <path class="st1" d="M109.4,66h218.7c17.6,0,32.4,12,36.7,28.2h24.5C384.6,64.6,358.9,42,328.1,42H109.4c-34.2,0-62,27.8-62,62 v230.5c0,31.2,23.2,57.1,53.2,61.4v-24.4c-16.7-4-29.2-19.1-29.2-37V104C71.4,83.1,88.4,66,109.4,66z"></path> <path class="st0" d="M408,115.8c-1.8-0.2-224.1-0.2-224.1-0.2c-34.2,0-62,27.8-62,62c0,0,0.1,234,0.2,235.8 c2.7,31.7,29.4,56.7,61.8,56.7h218.7c34.2,0,62-27.8,62-62V177.5C464.6,145.2,439.7,118.5,408,115.8z M440.6,408 c0,20.9-17,38-38,38H183.9c-21,0-38-17.1-38-38V177.5c0-21,17-38,38-38h218.7c21,0,38,17,38,38V408z"></path> </g> </g></svg>
                Copy link</button>
                <div id="edit-btn-wrapper"></div>
           </div>

           <div id="user-details">
                <h2>GENERAL INFO</h2>
                <hr>
                    <ul class="user-meta">
                        <li><span>${svgIcons.department}
                        Department:</span> <span id="u-dep"></span></li>
                        <li><span>
                        ${svgIcons.building} Building:</span>
                        <span id="u-building"></span></li>
                        <li><span>
                        ${svgIcons.room} Room:</span>
                        <span id="u-room"></span></li>
                        <li><span>
                        ${svgIcons.deskNumber} Desk Number:</span>
                        <span id="u-deskNumber"></span></li>
                        <li><span>
                        ${svgIcons.dateOfBirth} Date of Birth:</span>
                        <span id="u-date"></span></li>
                        <li><span>
                        ${svgIcons.manager} Manager:</span>
                        <a id="u-manager"></a></li>
                    </ul>
                <h2>CONTACTS</h2>
                <hr>
                    <ul class="user-meta">
                        <li><span>
                        ${svgIcons.mobilePhone}
                        Mobile phone:</span>
                        <a id="u-phone"></a></li>
                        <li><span>
                        ${svgIcons.email}
                        Email:</span>
                        <a id="u-email"></a></li>
                        <li><span>
                        ${svgIcons.skype}
                        Skype:</span>
                        <a id="u-skype" href=""></a></li>
                        <li><span>
                        ${svgIcons.cNumber}
                        C-Number:</span>
                        <span id="u-cNumber"></span></li>
                    </ul>
                <h2>TRAVEL INFO</h2>
                <hr>
                    <ul class="user-meta">
                        <li><span>
                        ${svgIcons.world}
                        Citizenship:</span> <span id="u-city"></span></li>
                        <li><span>
                        ${svgIcons.visa}
                        Visa Type:</span>
                         <span id="u-visaType"></span></li>
                        <li><span>
                        ${svgIcons.dateOfBirth}
                        Visa Period: </span>
                          <span id="u-visaPeriod"></span>
                        </li>
                    </ul>
            
             </div>
    
    `;

    container.innerHTML = rawHTML;

    const copyBtn = document.getElementById(
      "copy-btn",
    ) as HTMLButtonElement | null;
    const backBtn = document.getElementById(
      "back-btn",
    ) as HTMLButtonElement | null;
  
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
      });
    }
  
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }

    // Profile section
    const firstName = container.querySelector("#u-first-name");
    if (firstName) firstName.textContent = `${user.first_name}`;

    const lastName = container.querySelector("#u-last-name");
    if (lastName) lastName.textContent = `${user.last_name}`;

    const nativeName = container.querySelector("#u-native-name");
    if (nativeName)
      nativeName.textContent = `${user.last_name} ${user.middle_native_name} ${user.first_name}`;

    const avatarImg = container.querySelector<HTMLImageElement>("#u-avatar");
    if (avatarImg) {
      avatarImg.src = user.user_avatar;
      avatarImg.alt = user.first_name;
    }

    // Edit button functionality

    if (canEdit(currentUser, user)) {
      let isEdit = false;
      const editWrapper = container.querySelector("#edit-btn-wrapper");
      const editBtn = document.createElement("button");
      editBtn.id = "edit-btn";

      const defBtnContent = `
      ${svgIcons.editBtn}
      EDIT`;

      editBtn.innerHTML = defBtnContent;

      editBtn.onclick = () => {
        if (!isEdit) {
          editMode(container, user);
          const saveBtn = document.createElement("button");
          saveBtn.textContent = "SAVE";
          editBtn.textContent = "CANCEL";

          saveBtn.className = "user-btn-class";
          saveBtn.onclick = () => saveUserInfo(container);
          editWrapper?.appendChild(saveBtn);
          isEdit = true;
        } else {
          readOnlyUserDetail(container, user, currentUser);
          isEdit = false;
        }
      };

      if (editWrapper) editWrapper.appendChild(editBtn);
    }

    // General info
    const uDep = document.querySelector("#u-dep");
    if (uDep) uDep.textContent = `${user.department}`;
    const uBuilding = document.querySelector("#u-building");
    if (uBuilding) uBuilding.textContent = `${user.building}`;
    const uRoom = document.querySelector("#u-room");
    if (uRoom) uRoom.textContent = `${user.room}`;
    const uDeskNumber = document.querySelector("#u-deskNumber");
    if (uDeskNumber) uDeskNumber.textContent = `${user.desk_number}`;
    const uDate = document.querySelector("#u-date");
    if (uDate)
      uDate.textContent = `${user.date_birth.day} ${user.date_birth.month} ${user.date_birth.year}`;
    const uManager = document.querySelector("#u-manager");
    if (uManager)
      uManager.textContent = `${user.manager.first_name} ${user.manager.last_name}`;

    // Contact info
    const uPhone = document.querySelector("#u-phone") as HTMLAnchorElement;
    if (uPhone) {
      uPhone.href = `tel:${user.phone}`;
      uPhone.textContent = `${user.phone}`;
    }
    const uEmail = document.querySelector("#u-email") as HTMLAnchorElement;
    if (uEmail) {
      uEmail.href = `mailto:${user.email}`;
      uEmail.textContent = `${user.email}`;
    }
    const uSkype = document.querySelector("#u-skype") as HTMLAnchorElement;
    if (uSkype) uSkype.textContent = `${user.skype}`;

    const cNumber = document.querySelector("#u-cNumber");
    if (cNumber) cNumber.textContent = `${user.cnumber}`;

    // Travel info
    const uCity = document.querySelector("#u-city");
    if (uCity) uCity.textContent = `${user.citizenship}`;

    const visaType = document.querySelector("#u-visaType");
    if (visaType) visaType.textContent = `${user.visa[0]?.type}`;

    const visaPeriod = document.querySelector("#u-visaPeriod");
    if (visaPeriod)
      visaPeriod.textContent = `${new Date(user.visa[0]!.start_date).toDateString()} - 
                            ${new Date(user.visa[0]!.end_date).toDateString()}`;
  }

  readOnlyUserDetail(contentContainer, user, currentUser);

  /**
   * Editing mode functionality
   */

  function editMode(container: HTMLElement, user: Employee) {
    const firstName = container.querySelector("#u-first-name");
    const lastName = container.querySelector("#u-last-name");

    const uDep = container.querySelector("#u-dep");
    const uBuilding = container.querySelector("#u-building");
    const uRoom = container.querySelector("#u-room");
    const uDeskNum = container.querySelector("#u-deskNumber");
    const uDate = container.querySelector("#u-date");

    const uPhone = container.querySelector("#u-phone");
    const uEmail = container.querySelector("#u-email");
    const uSkype = container.querySelector("#u-skype");
    const uCNumber = container.querySelector("#u-cNumber");

    // Input section
    const inputFirstName = document.createElement("input");
    const inputLastName = document.createElement("input");

    const inputDep = document.createElement("input");
    const inputBuilding = document.createElement("input");
    const inputRoom = document.createElement("input");
    const inputDeskNumber = document.createElement("input");
    const inputDate = document.createElement("input");

    const inputPhone = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputSkype = document.createElement("input");
    const inputCNumber = document.createElement("input");

    // Set types
    inputFirstName.type = "text";
    inputLastName.type = "text";

    inputDep.type = "text";
    inputBuilding.type = "text";
    inputRoom.type = "text";
    inputDeskNumber.type = "number";
    inputDate.type = "date";

    inputPhone.type = "text";
    inputEmail.type = "email";
    inputSkype.type = "text";
    inputCNumber.type = "text";

    // Classes fixed
    const EDIT_CLASS = "edit-user-class";

    inputFirstName.className = EDIT_CLASS;
    inputLastName.className = EDIT_CLASS;

    inputDep.className = EDIT_CLASS;
    inputBuilding.className = EDIT_CLASS;
    inputRoom.className = EDIT_CLASS;
    inputDeskNumber.className = EDIT_CLASS;
    inputDate.className = EDIT_CLASS;

    inputPhone.className = EDIT_CLASS;
    inputEmail.className = EDIT_CLASS;
    inputSkype.className = EDIT_CLASS;
    inputCNumber.className = EDIT_CLASS;

    // Set IDS
    inputFirstName.id = "edit-first-name";
    inputLastName.id = "edit-last-name";
    inputDep.id = "edit-dep";
    inputBuilding.id = "edit-building";
    inputRoom.id = "edit-room";
    inputDeskNumber.id = "edit-desk";
    inputDate.id = "edit-date";
    inputPhone.id = "edit-phone";
    inputEmail.id = "edit-email";
    inputSkype.id = "edit-skype";
    inputCNumber.id = "edit-cnumber";

    // Set values
    inputFirstName.value = user.first_name;
    inputLastName.value = user.last_name;

    inputDep.value = user.department;
    inputBuilding.value = user.building;
    inputRoom.value = user.room;
    inputDeskNumber.value = String(user.desk_number);

    // Date section
    inputDate.value =
      `${user.date_birth.year}-` +
      `${String(user.date_birth.month).padStart(2, "0")}-` +
      `${String(user.date_birth.day).padStart(2, "0")}`;

    inputPhone.value = user.phone;
    inputEmail.value = user.email;
    inputSkype.value = user.skype;
    inputCNumber.value = user.cnumber;

    // Replace DOM content
    if (firstName) firstName.replaceChildren(inputFirstName);
    if (lastName) lastName.replaceChildren(inputLastName);

    if (uDep) uDep.replaceChildren(inputDep);
    if (uBuilding) uBuilding.replaceChildren(inputBuilding);
    if (uRoom) uRoom.replaceChildren(inputRoom);
    if (uDeskNum) uDeskNum.replaceChildren(inputDeskNumber);
    if (uDate) uDate.replaceChildren(inputDate);

    // replace <a> tags
    if (uPhone) {
      const parent = uPhone.parentElement;
      uPhone.remove();
      parent?.appendChild(inputPhone);
    }

    if (uEmail) {
      const parent = uEmail.parentElement;
      uEmail.remove();
      parent?.appendChild(inputEmail);
    }

    if (uSkype) {
      const parent = uSkype.parentElement;
      uSkype.remove();
      parent?.appendChild(inputSkype);
    }

    if (uCNumber) uCNumber.replaceChildren(inputCNumber);
  }


});
