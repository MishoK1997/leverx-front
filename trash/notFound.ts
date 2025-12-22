export function notFound(): void {
  const searchSection = document.querySelector<HTMLElement>(".search-section");
  const contentContainer =
    document.querySelector<HTMLElement>(".content-container");
  const detailContainer = document.getElementById(
    "user-detail-container",
  ) as HTMLElement;
  const header = document.querySelector<HTMLElement>("header");

  if (searchSection) searchSection.style.display = "none";
  if (contentContainer) contentContainer.style.display = "none";
  if (detailContainer) detailContainer.style.display = "none";
  if (header) header.style.display = "none";

  // Creating container
  const errorContainer: HTMLDivElement = document.createElement("div");
  errorContainer.id = "not-found-container";

  errorContainer.innerHTML = `
        <div style="margin-bottom: 20px;">
            <img width="500px" height="500px" src="../pics/404.svg" />
        </div>
        <h1 >404 Page Not Found</h1>
        <p>
            Sorry, we can't find that page! It might be an old link or maybe it was moved
        </p>
        <button id="go-home-btn" 
        ">GO TO THE HOME PAGE</button>
    `;

  document.body.appendChild(errorContainer);
  const homeBtn = document.getElementById("go-home-btn") as HTMLButtonElement;

  if (!homeBtn) return;

  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
