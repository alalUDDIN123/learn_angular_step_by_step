## CRUD Operation without State Management

This project demonstrates a simple CRUD (Create, Read, Update, Delete) operation implementation without any dedicated state management library or framework in Angular. It provides functionality to create, retrieve, update, and delete dummy data.
### **`Project Structure`**

The project has the following structure:

- `src/app/components`: Contains the Angular components for displaying and interacting with the data.
- `src/app/services`: Contains the Angular service for handling data operations.

### **`Functionality`**

The application allows you to perform the following operations:

- Retrieve and display a list of dummy data items.
- Create a new dummy data item.
- Edit an existing dummy data item.
- Delete a dummy data item.

### **`Implementation Details`**

1. The `CrudService` in the `services` directory provides methods to perform CRUD operations on the dummy data.
2. The `AppComponent` and `AppComponent.html` files handles the user interface and interaction with the data.
3. The service utilizes an array to store the dummy data items and provides methods to manipulate the data array based on the requested CRUD operation.



---
---
`git push origin crud_operation_without_state_management`