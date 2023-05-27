# Angular Component

`Component is a peace of code that can reuse in multiple pages`

### An angular component contains mainly three parts
 1. Typescript class
 2. Html templates
 3. Stylesheet file

The TypeScript class defines the interaction of the HTML template and the rendered DOM structure, while the style sheet describes its appearance.

## How to create component in angular
  - There are two ways to create a componenet 
   - One is using angular cli
     - `ng generate component <component-name>` (`ng g c <component-name>` short way)

   - [Manual Creation](#how-to-create-a-component-manually)
 

 - Mostly suggested to create using angular cli  

 ---
 ---

# How to create a component manually
1. Create a new folder inside the `src/app` directory. Let's assume the component name is "example".

2. Inside the "example" folder, create four files with the following names:
   - `example.component.ts` (TypeScript class)
   - `example.component.html` (HTML template)
   - `example.component.css` (Stylesheet)
   - `example.component.spec.ts` (Component unit test)

3. Open the `example.component.ts` file and define the component class. Here's a basic example:

   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-example',
     templateUrl: './example.component.html',
     styleUrls: ['./example.component.css']
   })
   export class ExampleComponent {
     // Component logic and properties go here
   }
   ```

4. Open the `example.component.html` file and add the HTML template . Here's a simple example:

   ```html
   <h1>Welcome to the Example Component!</h1>
   <p>This is a sample Angular component.</p>
   ```

5. Open the `example.component.css` file and add the styles for your component. Here's an example:

   ```css
   h1 {
     color: blue;
   }

   p {
     font-size: 16px;
   }
   ```

6. Optionally, we can create unit tests for our component in the `example.component.spec.ts` file. This helps ensure the component behaves as expected.

7. Now  component files are ready, we can include the newly created component in other parts of our application by adding its selector (`app-example` in this example) to the desired template.

8. Finally, we need to register our component in the Angular module to make it available for use. Open the module file (e.g., `app.module.ts`) and import the component, then add it to the `declarations` array. For example:

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';

   import { AppComponent } from './app.component';
   import { ExampleComponent } from './example/example.component';

   @NgModule({
     declarations: [AppComponent, ExampleComponent],
     imports: [BrowserModule],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule {}
   ```
---
---
` git push origin components`