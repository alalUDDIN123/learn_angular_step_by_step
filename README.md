# Angular Routing

## Basic routing

This is a basic routing setup that includes two components: `home` and `about`.

### Components

- `home`
- `about`

#### Paths

- `/` (home)
- `/about`

---

## Intermediate routing

This is for dynamic routing setup and includes two components: `hero` and `hero-list`.

### Components  

- `hero`
- `hero-list`

#### Paths

- `/hero`
- `/hero/:id` (dynamic id)


---

## Advanced routing

This is an advanced routing setup that includes different modules, such as `admin`, `authenticate`, and `heroes`. It also includes additional features like not-found pages, lazy loading, and redirects.

### Modules Included

- `admin`
- `authenticate`
- `heroes`

### Components

- **Inside `app` directory**
  - `home`

- **Inside `admin` module**
  - `users` (skipping tests)
  - `admin-dashboard` (skipping tests)

- **Inside `authenticate` module**
  - `login` (skipping tests)
  - `signup` (skipping tests)

- **Inside `heroes` module**
  - `hero-details` (skipping tests)
  - `hero-list` (skipping tests)

With the above folder and file structure, the desired routing setup is as follows:

### Routing

- Default home
  - The `home` component will have four buttons:
    - Login
    - Sign up
    - Hero
    - Admin (protected)

- Paths for `admin`
  - `/admin`
  - `/admin/user`

- Paths for `authenticate`
  - `/login`
  - `/signup`

- Paths for `heroes`
  - `/hero`
  - `/hero/:id` (here `id` will be dynamic)
---
---
`git push origin routing`