import renderEmployees from "./renderEmployees.js";
import { notFound } from "./notFound.js";
import type { Employee } from "./types.js";

export default function advancedSearchHandler(
  allUsers: Employee[] | undefined,
): void {
  const countSpan = document.querySelector<HTMLSpanElement>(".employee-count");

  if (!allUsers) return;

  //  Select inputs
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  const emailInput = document.getElementById(
    "email",
  ) as HTMLInputElement | null;
  const phoneInput = document.getElementById(
    "phone",
  ) as HTMLInputElement | null;
  const skypeInput = document.getElementById(
    "skype",
  ) as HTMLInputElement | null;
  const buildingSelect = document.getElementById(
    "building",
  ) as HTMLSelectElement | null;
  const roomInput = document.getElementById("room") as HTMLInputElement | null;
  const deptSelect = document.getElementById(
    "department",
  ) as HTMLSelectElement | null;

  const filters: { [key: string]: string } = {
    name: nameInput?.value.toLowerCase().trim() || "",
    email: emailInput?.value.toLowerCase().trim() || "",
    phone: phoneInput?.value.toString().trim() || "",
    skype: skypeInput?.value.toString().trim() || "",
    building: buildingSelect?.value || "",
    room: roomInput?.value.toString().trim() || "",
    department: deptSelect?.value || "",
  };

  // update url

  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete("search");

  Object.keys(filters).forEach((key) => {
    const val = filters[key];
    if (val !== null && val !== undefined && val !== "")
      urlParams.set(key, filters[key]);
    else urlParams.delete(key);
  });

  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlParams}`,
  );

  const filtered = allUsers.filter((user) => {
    // Boolean flags are used in order to ignore any empty flags

    // Name: Checks if First OR Last Name includes the text
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const matchName = !filters.name || fullName.includes(filters.name);

    // Email
    const matchEmail =
      !filters.email ||
      (user.email && user.email.toLowerCase().includes(filters.email));

    // Phone
    const matchPhone =
      !filters.phone || (user.phone && user.phone.includes(filters.phone));

    // Skype
    const matchSkype =
      !filters.skype || (user.skype && user.skype.includes(filters.skype));

    // Building
    const matchBuilding =
      !filters.building || user.building === filters.building;

    // Room:
    const matchRoom =
      !filters.room || (user.room && user.room.includes(filters.room));

    // Department:
    const matchDept =
      !filters.department || user.department === filters.department;

    return (
      matchName &&
      matchEmail &&
      matchPhone &&
      matchSkype &&
      matchBuilding &&
      matchRoom &&
      matchDept
    );
  });

  filtered.length === 0 ? notFound() : renderEmployees(filtered);

  //  COUNTER
  if (countSpan) {
    countSpan.textContent = `${filtered.length} employees displayed`;
  }
}
