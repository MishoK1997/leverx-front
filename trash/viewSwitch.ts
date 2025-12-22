/**
 * This function allows dynamicly switch grid to list and viseversa
 * Addtionally hilight the current mode depend on what is Grid or List
 */

export default function initViewSwitch(): void {
  const gridBtn = document.getElementById("view-grid") as HTMLButtonElement;
  const listBtn = document.getElementById("view-list") as HTMLButtonElement;

  const container = document.querySelector<HTMLDivElement>(
    ".employee-list-container",
  );
  const header = document.querySelector<HTMLDivElement>(".list-header-row");

  if (!header || !container) return;

  function setActive(button: HTMLButtonElement): void {
    gridBtn.classList.remove("active");
    listBtn.classList.remove("active");
    button.classList.add("active");
  }

  gridBtn.addEventListener("click", () => {
    container.classList.remove("view-list");
    container.classList.add("view-grid");

    header!.style.display = "none";

    setActive(gridBtn);
  });

  listBtn.addEventListener("click", () => {
    container.classList.remove("view-grid");
    container.classList.add("view-list");

    header.style.display = "flex";

    setActive(listBtn);
  });

  setActive(gridBtn);
}
