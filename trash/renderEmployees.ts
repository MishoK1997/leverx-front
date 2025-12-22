/**
 * This JS file is responsible to render data propperly
 */

import svgIcons from "./assets/svgFiles.js";
import type { Employee } from "./types";

export default function renderEmployees(data: Employee[] = []): void {
  const countSpan =
    document.querySelector<HTMLSpanElement>(".aside-right span");

  const existingCard = document.querySelector<HTMLElement>(".employee-card");

  const container = document.querySelector<HTMLElement>(
    ".employee-list-container",
  );

  if (!countSpan || !container || !existingCard) return;

  container.innerHTML = " ";

  data.forEach((user) => {
    const card = existingCard.cloneNode(true) as HTMLElement;
    const img = card.querySelector<HTMLImageElement>("img");
    if (img) {
      img.src = user.user_avatar;
      img.alt = user.middle_native_name || "";
    }
    const name = card.querySelector<HTMLHeadingElement>("h3");

    if (name) name.textContent = user.first_name + " " + user.last_name;

    const details = card.querySelectorAll<HTMLSpanElement>(".details span");

    if (details[0])
      details[0].innerHTML = `${svgIcons.department} ${user.department}`;
    if (details[1]) details[1].innerHTML = `${svgIcons.room} ${user.room}`;

    card.addEventListener("click", () => {
      window.location.href = `users.html?id=${user._id}`;
    });

    container.appendChild(card);
  });

  countSpan.textContent = `${data.length} employees displayed`;
}
