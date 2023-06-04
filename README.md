# Angular Routing

## Basic routing
 
### Components
  `ng g c home`

---
---
## modules included
   - `ng g m admin`
   - `ng g m authenticate`
   - `ng g m heroes`

## components

- **`Inside app directory`**
   - `ng g c home`

- **`Inside admin module`**
   - `ng g c admin/users --skip-tests=true `   
   - `ng g c admin/admin-dashboard --skip-tests=true` 

---

- **`Inside authenticate module`**
   - `ng g c authenticate/login --skip-tests=true`   
   - `ng g c authenticate/signup --skip-tests=true` 

---


- **`Inside heroes module`**
   - `ng g c heroes/hero-details --skip-tests=true`   
   - `ng g c heroes/hero-list --skip-tests=true` 
 
 With the above folder and file structure I want
 - routing
   - Default home
     - In the home component there will be four buttons
       - login
       - sign up
       - hero
       - admin (protected)
   - path for admin
      - /admin
      - /admin/user

    - path for authenticate
      - /login
      - /signup   

   - path for heroes
      - /hero
      - /hero/:id (here id will be dynamic)   

 - services