import { Employee } from "./types";
import svg from "./assets/svgFiles.js";
import "./scss/header.scss";

export function renderHeader(): void {
  const storedUser: string | null =
    localStorage.getItem("user") || sessionStorage.getItem("user");

  if (!storedUser) return;

  const currentPath: string = window.location.pathname;

  const currentUser: Employee = JSON.parse(storedUser);

  const header: HTMLElement = document.createElement("header");

  header.innerHTML = `
        <div class="header-left">
            <span class="company-name">LEVERX</span>
            <h1 class="app-name">EMPLOYEE SERVICES</h1>
            </div>
        
            <nav class="header-nav">
                <p class="nav-item  
                   ${currentPath.includes("index.html") && "active"}
                " id="nav-address">Address Book</p>
                ${
                  currentUser.role === "admin"
                    ? `<p class="nav-item 
                    ${currentPath.includes("settings.html") && "active"}
                  " id="nav-settings">Settings</p>`
                    : ""
                }
            </nav>
        
            <div class="header-right">
                <button class="pill-btn btn-support">
                    <img src="./pics/question-mark-9.svg" alt="Question Mark">
                    <span class="btn-text">SUPPORT</span>
                </button>
        
                <button class="pill-btn user-profile">
                    <img src="${currentUser.user_avatar || "./pics/user-avatar.jpg"}" alt="profile avatar"/>
                    <span class="btn-text">${currentUser.first_name.toUpperCase()} ${currentUser.last_name.toUpperCase()}</span>
                </button>
        
                <button class="logout-btn">
                    <img src="./pics/logout-8.svg" alt="Logout button" />
                </button>


                <!-- Burger menu -->
                <button class="burger-btn" id="burgerToggle">
                ${svg.burgerMenu}
                ${svg.crossBtn}
                 </button>
        </div>

            <!-- Slide bar-->
            <div class="burger-menu" id="burgerMenu">
                <div class="burger-menu-content">
                    
                    <!--Profile section -->
                    <div class="burger-profile">
                        <img src="${currentUser.user_avatar || "./pics/user-avatar.jpg"}" alt="Profile" class="burger-avatar">
                        <div class="burger-user-info">
                            <button class="burger-username">${currentUser.first_name} ${currentUser.last_name}</button>
                            <button class="burger-signout">Sign out</button>
                        </div>
                    </div>

                    <!-- Nav links -->
                    <nav class="burger-nav-links">
                        <p class="burger-item ">Address Book</p>
                        <!-- Add more links here -->
                    </nav>

                    <button class="mob-support pill-btn">
                    <img src="./pics/question-mark-9.svg" alt="Question Mark">
                    <span class="btn-text">SUPPORT</span>
                </button>
                 
            </div>
    </div>
    `;

  document.body.prepend(header);

  const profileBtn = header.querySelector<HTMLButtonElement>(".user-profile");

  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      window.location.href = `users.html?id=${currentUser._id}`;
    });
  }

  const adressBtn = document.getElementById("nav-address") as HTMLElement;
  const settingsBtn = document.getElementById("nav-settings") as HTMLElement;

  if (adressBtn) {
    adressBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (settingsBtn) {
    settingsBtn.addEventListener("click", () => {
      window.location.href = "settings.html";
    });
  }

  // logout functionality
  const logoutBtn = header.querySelector<HTMLButtonElement>(".logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("user");
      localStorage.removeItem("user");
      window.location.href = "/sign-in.html";
    });
  }

  // Toggling here
  const burgerBtn = document.getElementById("burgerToggle") as HTMLElement;
  const burgerMenu = document.getElementById("burgerMenu") as HTMLElement;
  const iconBurger = document.querySelector(".icon-burger") as HTMLElement;
  const iconClose = document.querySelector(".icon-close") as HTMLElement;

  burgerBtn?.addEventListener("click", () => {
    burgerMenu?.classList.toggle("open");

    const isOpen = burgerMenu?.classList.contains("open");

    if (isOpen) {
      iconBurger.style.display = "none";
      iconClose.style.display = "block";
    } else {
      iconBurger.style.display = "block";
      iconClose.style.display = "none";
    }
  });
}
