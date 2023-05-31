# `Most common uses Angular CLI`


1. **Create a New Angular Application**

   **Description:** Angular CLI allows us to quickly scaffold a new Angular application with all the necessary files and configurations.

   **Example:** `ng new my-app`

2. **Generate Components, Directives, Custom Pipes or Services**

   **Description:** Angular CLI provides commands to generate various Angular artifacts like components, directives, and services, reducing manual setup time.

   **Examples:**
   - Component: `ng generate component my-component`
   - Directive: `ng generate directive my-directive`
   - Pipes: `ng generate pipe pipes/age`
   - Service: `ng generate service my-service`
   - Generate components in specific folders:
     - `ng generate component directives/my-component`
     - `ng generate component services/auth`

3. **For creating component without HTML or template or style**

   **Description:** Angular CLI allows us to create a component without generating separate HTML, template, or style files.

   **Examples:**
   - Component without CSS file: `ng generate component inline-style --inline-style`
   - Component without HTML file: `ng generate component inline-template --inline-template`
   - Component without CSS and HTML files: `ng generate component inline --inline-style --inline-template`

4. **Serve the Application**

   **Description:** Angular CLI includes a development server that hosts usr application locally during development, enabling us to view and test it in a web browser.

   **Example:** `ng serve`

5. **Build the Application**

   **Description:** Angular CLI allows us to build usr application for production, optimizing and bundling the code for deployment to a web server.

   **Example:** `ng build --prod`

6. **Run Unit Tests**

   **Description:** Angular CLI integrates with popular testing frameworks like Jasmine and Karma, enabling us to write and execute unit tests for usr Angular code.

   **Example:** `ng test`

7. **Create Angular Modules**

   **Description:** Angular CLI provides commands to generate Angular modules, which help organize usr application into cohesive blocks of functionality.

   **Example:** `ng generate module my-module`

8. **Generate Routing Configuration**

   **Description:** Angular CLI allows us to generate routing configurations, enabling us to define routes for usr application and navigate between different components.

   **Example:** `ng generate module app-routing --flat --module=app`

9. **Lint the Code**

   **Description:** Angular CLI integrates with popular linting tools like ESLint and TSLint, allowing us to analyze usr code for potential errors and enforce coding standards.

   **Example:** `ng lint`

10. **Create Custom Schematics**

    **Description:** Angular CLI allows us to create and use custom schematics, which are reusable blueprints for generating code and modifying files within usr Angular application.

    **Example:** `ng generate my-schematic:my-blueprint`

11. **Update Angular Dependencies**

    **Description:** Angular CLI provides a command to update the Angular dependencies in usr project to the latest stable versions.

    **Example:** `ng update @angular/core`

---
---
`git push origin common_command`