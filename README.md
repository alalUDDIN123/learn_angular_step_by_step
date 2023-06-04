# Angular Routing

## Basic routing

This is a basic routing setup that includes two components: `home` and `about`.

### Components

- `home`
- `about`

#### Paths

- `/` (home)
- `/about`

**Tag Commit:**

- `git tag -a basic-routing -m "basic-routing"` (Tag commit for basic routing setup)
- To checkout this tag, use the command: `git checkout basic-routing`

---

## Intermediate routing

This is for dynamic routing setup and includes two components: `hero` and `hero-list`.

### Components  

- `hero`
- `hero-list`

#### Paths

- `/hero`
- `/hero/:id` (dynamic id)

**Tag Commit:**

- `git tag -a intermediate-routing-m "intermidate-routing"` (Tag commit for intermediate routing setup)
- To checkout this tag, use the command: `git checkout intermediate-routing`

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

**Tag Commit:**

- `git tag -a advance-routing -m "advance-routing"` (Tag commit for advanced routing setup)
- To checkout this tag, use the command: `git checkout advance-routing`

### Services

To enhance the functionality of this Angular application, We can add various services. Here are some examples:

1. AuthenticationService: Handles user authentication, login, and signup functionality.
2. AdminService: Provides methods for managing admin-related data, such as user management.
3. HeroService: Manages hero-related data, including fetching heroes, adding new heroes, and updating hero details.
4. ErrorHandlingService: Handles error handling and provides centralized error reporting and logging.

We can create these services using the Angular CLI:

```
ng generate service authentication
ng generate service admin
ng generate service hero
ng generate service error-handling
```
