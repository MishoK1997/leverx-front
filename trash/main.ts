import type { Employee } from "./types.js";
import { advancedKeys } from "./types.js";
import apiRequest from "./apiRequest.js";
import renderEmployees from "./renderEmployees.js";
import viewSwitcher from "./viewSwitch.js";
import handleBasicSearch from "./handleBasicSearch.js";
import { renderHeader } from "./header.js";
import advancedSearchHandler from "./advancedSearchHandler.js";
import authChecker from "./guard.js";
import "./scss/style.scss";

authChecker();

const basicSearchBtn = document.getElementById(
  "basic-search-btn",
) as HTMLButtonElement;
const basicInput = document.getElementById("basic-name") as HTMLInputElement;

const basicForm = document.querySelector<HTMLFormElement>(
  "#basic-search-section form",
);
const advancedSearch = document.querySelector<HTMLButtonElement>(
  "#advanced-search-section button",
);
const advancedSearchForm = document.querySelector<HTMLFormElement>(
  "#advanced-search-section form",
);

renderHeader();

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch Data
  let allUsers: Employee[] | undefined = await apiRequest("users", "GET"); // Store fetched data globally for filtering

  // View switcher (grid and list)
  viewSwitcher();

  // memorized search
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const savedSearch: string | null = params.get("search");

  //Checking if any advanced key exist in the url
  const isAdvancedSearch: boolean = advancedKeys.some((key) => params.has(key));

  //Render with routing
  if (savedSearch) {
    if (basicInput) basicInput.value = savedSearch;
    handleBasicSearch(allUsers);
  } else if (isAdvancedSearch) {
    const advTab = document.getElementById("tab-advanced") as HTMLInputElement;
    advTab.checked = true;

    //Fill inputs from url parameters
    advancedKeys.forEach((key) => {
      const val = params.get(key);
      const input = document.getElementById(key) as
        | HTMLInputElement
        | HTMLSelectElement
        | null;

      if (input) input.value = val ?? "";
    });

    advancedSearchHandler(allUsers);
  } else {
    renderEmployees(allUsers);
  }

  //  Basic Search Listener
  if (!basicForm || !advancedSearchForm || !advancedSearch) {
    console.error("Critical search elements missing from DOM");
    return;
  }

  basicForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleBasicSearch(allUsers);
  });

  basicSearchBtn.addEventListener("click", () => {
    handleBasicSearch(allUsers);
  });

  advancedSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    advancedSearchHandler(allUsers);
  });

  advancedSearch.addEventListener("click", () => {
    advancedSearchHandler(allUsers);
  });
});
