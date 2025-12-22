/**
 * Basic search logic
 */
import { notFound } from "./notFound.js";
import renderEmployees from "./renderEmployees.js";
import { advancedKeys } from "./types.js";
import type { Employee } from "./types.js";

const countSpan = document.querySelector<HTMLSpanElement>(".aside-right span");
const basicSearchInput = document.getElementById(
  "basic-name",
) as HTMLInputElement | null;

export default function handleBasicSearch(
  allUsers: Employee[] | undefined,
): void {
  if (!allUsers) {
    return;
  }

  if (!basicSearchInput) {
    return;
  }

  const term: string = basicSearchInput.value.trim().toLowerCase();

  const urlParams: URLSearchParams = new URLSearchParams(
    window.location.search,
  );

  // Clean url if you switch to tab and try basic input
  advancedKeys.forEach((key) => urlParams.delete(key));

  // term ? urlParams.set("search", term) : urlParams.delete("search");

  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${urlParams}`,
  );

  if (!term) {
    renderEmployees(allUsers);
    return;
  }


  const filtered: Employee[] = allUsers.filter((user) => {
    const termNorm = term.replace(/\s+/, " ");

    const firstName = user.first_name.toLowerCase();
    const lastName = user.last_name.toLowerCase();

    const fullName = `${firstName} ${lastName}`;
    const fullNameReverse = `${lastName} ${firstName}`;

    const idMatch = user._id.toLowerCase().startsWith(termNorm);
    const firstMatch = firstName.startsWith(termNorm);
    const lastMatch = lastName.startsWith(termNorm);
    const fullMatch = fullName.startsWith(termNorm);
    const reverseMatch = fullNameReverse.startsWith(termNorm);

    return idMatch || firstMatch || lastMatch || fullMatch || reverseMatch;
  });

  // Returns not found message if there is a wrong input
  filtered.length === 0 ? notFound() : renderEmployees(filtered);

  if (!countSpan) return;

  countSpan.textContent = `${filtered.length} employee displayed`;
}
