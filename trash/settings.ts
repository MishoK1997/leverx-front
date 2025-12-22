import { renderHeader } from "./header";
import apiRequest from "./apiRequest";
import "./scss/style.scss";
import { Employee } from "./types";
import "./scss/settings.scss";

import { getCurrUser, updateRole, isRoleEditable } from "./utils/commonUtils";
import { settingsGuard } from "./guard";

import { filterEmployees } from "./utils/searchUtils";

settingsGuard();
renderHeader();

// This function allows create an element in a way that precludes use of innerHTML
// Reduce XSS / DOM injection

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  classes: string[] = [],
  text: string = "",
) {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (text) element.textContent = text;
  return element;
}

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("settings-container");
  if (!container) return;

  container.innerHTML = "";

  const currentUser = getCurrUser<Employee>();

  const allUsers: Employee | undefined = await apiRequest("users", "GET");

  const card = el("div", ["card"]);
  const title = el("h1", ["header-title"], "ROLES & PERMISSIONS");
  card.appendChild(title);

  const headerRow = el("div", ["grid-row", "table-header"]);

  const searchWrapper = el("div", ["search-wrapper"]);
  const searchInput = el("input", ["search-input"]);
  searchInput.setAttribute("placeholder", "Type to search");
  searchWrapper.appendChild(searchInput);

  const roleHeader = el("h2", ["col-header"], "Address book role");
  const adminHeader = el("h2", ["col-header"], "Admin");

  headerRow.appendChild(searchWrapper);
  headerRow.appendChild(roleHeader);
  headerRow.appendChild(adminHeader);
  card.appendChild(headerRow);

  const rowsFragment = document.createDocumentFragment();

  [...allUsers].forEach((user) => {
    const row = el("div", ["grid-row", "data-row"]);

    const userInfo = el("div", ["user-info"]);

    const avatar = el("img", ["avatar"]);
    avatar.setAttribute("src", user?.user_avatar);
    avatar.setAttribute("alt", user?.first_name);

    const userText = el("div", ["user-text"]);
    const firstName = el("span", ["user-name"], user?.first_name);
    userText.appendChild(firstName);

    const lastName = el("span", ["user-lastName"], user?.last_name);
    userText.appendChild(lastName);

    userInfo.appendChild(avatar);
    userInfo.appendChild(userText);

    // Boolean check of role edit
    const isRoleAllowed: Boolean = isRoleEditable(currentUser, user);

    const roleContainer = el("div", ["role-toggle"]);

    const btnEmployee = el("button", ["btn-toggle"], "EMPLOYEE");
    const btnHr = el("button", ["btn-toggle"], "HR");

    if (user.role === "employee") btnEmployee.classList.add("active");
    if (user.role === "hr") btnHr.classList.add("active");

    /***
     * @updateRole  Returns a boolean value via updateRole helper
     * that send a PATCH request through @apiRequest function
     * Based on the return value updates UI
     *
     * @isRoleAllowed this helper check if an action is allowed.
     */

    // Employee and HR buttons
    btnEmployee.onclick = async () => {
      if (isRoleAllowed) {
        const isEdit = await updateRole(user._id, "employee");
        if (isEdit) {
          btnEmployee.classList.add("active");
          btnHr.classList.remove("active");
          btnAdmin.classList.remove("active");
        }
      }
    };

    btnHr.onclick = async () => {
      if (isRoleAllowed) {
        const isEdit = await updateRole(user._id, "hr");
        if (isEdit) {
          btnHr.classList.add("active");
          btnEmployee.classList.remove("active");
          btnAdmin.classList.remove("active");
        }
      }
    };

    roleContainer.appendChild(btnEmployee);
    roleContainer.appendChild(btnHr);

    // Admin
    const adminContainer = el("div");
    const btnAdmin = el("button", ["btn-admin"], "ADMIN");

    if (user.role === "admin") btnAdmin.classList.add("active");

    // Admin button
    btnAdmin.onclick = async () => {
      if (isRoleAllowed) {
        const isEdit = await updateRole(user._id, "admin");
        if (isEdit) {
          btnAdmin.classList.add("active");
          btnHr.classList.remove("active");
          btnEmployee.classList.remove("active");
        }
      }
    };

    adminContainer.appendChild(btnAdmin);
    row.appendChild(userInfo);
    row.appendChild(roleContainer);
    row.appendChild(adminContainer);

    rowsFragment.appendChild(row);
  });

  card.appendChild(rowsFragment);
  container.appendChild(card);
});
