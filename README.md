## State managment with NgRx
  - Installed NgRx
     - `ng add @ngrx/store` : using angular cli **`OR`**
     - `npm install @ngrx/store --save` : using npm
## Application Overview

The Todo application is built using Angular and follows a structured folder hierarchy for organization. Here's a breakdown of the key components and their interconnectivity:

- `src/` is the root directory of the application.
- `app/` is the main application folder.
- `app/todo/` is a sub-folder within `app/` that contains the Todo-related components, actions, reducers, and selectors.

### Folder Structure

```
src/
├─ app/
│  ├─ todo/
│  │  ├─ actions/
│  │  │  └─ todo.actions.ts
│  │  ├─ reducers/
│  │  │  └─ todo.reducer.ts
│  │  ├─ selectors/
│  │  │  └─ todo.selectors.ts
│  │  
│  ├─ app.module.ts
│  ├─ app.component.ts
│  ├─ app.component.html
│  └─ app.component.css
└─ main.ts
```

Let's dive into the functionality and interconnectivity of these components:

- `app.module.ts`: This file serves as the main module of the Angular application and is responsible for importing and configuring various components, services, and NgRx-related modules.

- `app.component.ts`: This component acts as the root component of the application. It contains the logic for managing todo items, such as adding, updating, and deleting them. It interacts with the NgRx store to dispatch actions and retrieve data from the store.

- `app.component.html`: The HTML template for the `app.component.ts` file. It defines the structure of the application's UI and binds data using Angular directives and interpolation.

- `app.component.css`: The CSS file for styling the `app.component.html` template.

- `actions/`: This folder contains the action files related to todo items. In this case, the `todo.actions.ts` file defines the actions for creating, updating, and deleting todo items. These actions will be dispatched to the NgRx store to update the state.

- `reducers/`: This folder contains the reducer files that specify how the application's state should be updated based on dispatched actions. The `todo.reducer.ts` file handles the logic for updating the todo state in response to todo-related actions.

- `selectors/`: This folder contains the selector files that allow us to retrieve specific data from the NgRx store. The `todo.selectors.ts` file defines selectors to retrieve the list of todos or specific todo items.

- `main.ts`: The entry point file of the application. It bootstraps the Angular application and sets up the necessary environment.

## Application Functionality

The Todo application allows users to perform the following actions:

- Add a new todo item by entering a title and description.
- Update an existing todo item by modifying its title and description.
- Delete a todo item by clicking the delete button.
- The application utilizes NgRx state management to maintain a centralized and predictable data flow. The state consists of a list of todo items.

When the user interacts with the application's UI, the corresponding actions are dispatched to the NgRx store. The reducers handle these actions and update the state accordingly. The updated state is then reflected in the UI through data binding and Angular's change detection mechanism.



---
`git push origin state_NgRx`