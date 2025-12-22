# Mikheili Khojadze

## Repository Configuraiton

```
cd existing_repo
git remote add origin https://frontend-course-2025-gitlab.codelx.dev/fe/mikheili-khojadze.git
git branch -M main
git push -uf origin main
```

# Run and Deploy

After fetching this repository, run the following commands:

## Install dependencies for both frontend and backend

```
npm install
```

### Run backend

```
cd backend
npm run dev
```

### Run frontend

```
cd ../
npm run start
```

## Deployment

## Creating bundle 

```
npm run build

```
## Deploy on CF
In this case the FE is deployed on CloudFlare with wrangler CLI as workers and pages.

```
npx wrangler pages deploy ./dis

```

## Deploy of BE

```
npm run build

npm run start 

```
# Backend Specifications

Backend OS: Linux (AlmaLinux)

Node Version: Installed via NVM (v24)

Process Manager: PM2

Internet Exposure: Via Cloudflared tunnel

Hosted URL: leverx.web3space.ge

---

# Architecture ovierview 

## RTK integration approach

The projec's state management is divided into three core modules such as store configuration, API and caching,  authenticaiton slice.

### Store configuration 

The store acts  as the single source that combining the logic for authentication, user data and API caching.
Middleware such as authApi.middleware and usersApi.middleware enable features like caching and polling.

The defined endpoints splitted into two files usersAPI.ts and authAPI.ts

### Users API 

Manages employee data. It implements also an caching strategy.

getUsers -- fetches the directory. It provides a "LIST" tag.
getUserDetail -- Fetches single user data. Provides a specific "id" tag.
updateUserRole -- Patches the user role on the server and caches ["Users", 'id: "LIST"']. In case of mutation success, RTK Query autimatically re-fetches getUsers, this ensures the admin sees the new role immediatelly.

### Auth API

Manages public endpoints such as "sign-in" and "sign-up"

### Authentication Slice 

This slice handles the presistence and session state, initial state from local storage with getCurrUser() that derives persist login across refreshes.

logout reducer is an synchronous action that resets and clears localStorage and sessionStorage.

matchFulfilled - instead of dispatching a separate "set user" action after login, the lisce listens directly to the API. That ensures whenever the signIn mutation succeeds, the global user state is updated automatically.



---

# About users 

Note: The password is "123" for all users.
Admin: Michael - m.khojadze@leverx.com
Default manager: Marya Kizim - m.kizim@leverx.com

### HR
Ihar - sivak@leverx.com
Elon musk - e.musk@leverx.com

### Employees
Ivan - ivan@leverx.com
Nikita - nikita@leverx.com
user-6 - user-6@leverx.com
user-7 - user-7@leverx.com
Anton - a.sv@leverx.com
Dzmitry - d.fesik@leverx.com
Vitalic Butterin - vita@leverx.com
Satoshi Nakamoto - nakamoto@leverx.com
Linus Torvalds - linus@leverx.com
Sam Altman - sam@leverx.com

## Manager Hierarchy

### Marya Kizim (id: 1)

Manages:

Ivan Chaliadzinski (id: 2)

Michael Khojadze (id: 3)

Nikita Filimonau (id: 4)

Sam Altman (id: 15)

### Ihar Sivak (id: 5)
Manages:

User-6 (id: 6)

User-7 (id: 7)

Anton Sviarzhynski (id: 8)

Dzmitry Fesik (id: 9)

### Elon Musk (id: 10)
Manages:

Vitalic Butterin (id: 11)

Satoshi Nakamoto (id: 12)

Bill Gates (id: 13)

Linus Torvalds (id: 14)


---

# Technical Specifications

## Authentication & Authorization

### Sign In:

When a user attempts to sign in with an invalid email, the backend returns: "user doesn't exist".

When an incorrect password is entered, the backend returns: "Invalid credentials".

While the form is being submitted and processed, a loading message is rendered on the sign-in button.

### Sign Up:

Attempting to register with an email that already exists in the database triggers: "Email exist".

If the password and password confirmation do not match, the frontend validates and shows: "Password confirmation failed".

During submission, a loading message is displayed on the sign-up button.

### Remember Me:

If the "Remember Me" option is selected, user data is stored in localStorage; otherwise, it is stored in sessionStorage.

## Roles & Permissions

### Admin:

Has access to the Settings page.

Can manage roles and information of all employees except their own role.

### HR:

Can edit information only for employees for whom they are the HR.

Read-only access to all other employee data.

### Employee:

Read-only access to all data.

## Search Functionality

### Basic Search:

Supports searching by name, last name, ID, or full name.

Spaces between first and last names are acceptable.

Reverse name search is supported.

### Advanced Search:

Uses multiple input fields for precise filtering.

Returns "Not Found" when no matching data exists.

### Search Behavior:

Both search types update the URL to reflect the current search state.

Users can copy and open the URL to restore the same content and input values.

Page refresh preserves the latest search state and search input.

Changing tabs refreshes the user list.

### Settings Page

Uses Basic Search to filter employees.

URL updates based on search input and preserves state on refresh.

Invalid search input displays a friendly informative message.

Clicking on a manager's name in a user's detail view opens that manager’s detailed information.

Routing & Error Handling

Non-existent routes return a "Not Found" page.

URL protection is enforced: only logged-in users can access application routes.



## Name

LeverX Employee Project
