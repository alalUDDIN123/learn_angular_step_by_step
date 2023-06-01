# How to create custom directive in angular

1. Create a folder named "directives" in your Angular project. You can do this manually or by using the Angular CLI command:

   ```
   ng generate directive directives/custom-directives
   ```
   This command will generate two files inside the `"directives"` folder: 

    - `custom-directives.directive.ts`
    - `custom-directives.directive.spec.ts`

    <br/>

2. By default, Angular automatically registers the directive in the `declarations` array of the nearest module. However, it's good practice to verify that the directive is registered. Open the `app.module.ts` file (or the appropriate module file) and ensure that the custom directive is listed in the `declarations` array. If it's not there, add it:

   ```
   import { CustomDirectivesDirective } from './directives/custom-directives.directive';

   @NgModule({
     declarations: [
       // Other declarations...
       CustomDirectivesDirective,
     ],
     // Other module configuration...
   })
   export class AppModule { }
   ```

3. To use the custom directive, apply its selector to the desired element in your component's template. For example, if the selector is `appCustomDirectives`, you can use it like this:

   ```
   <div appCustomDirectives></div>
   ```

4. If you need to change the appearance or behavior of elements targeted by the directive, you can inject the `ElementRef` into the directive's constructor. Then, you can use the `ElementRef` to access and manipulate the DOM element. Here's an example of how to use `ElementRef` within the custom directive:

   ```
   import { Directive, ElementRef } from '@angular/core';

   @Directive({
     selector: '[appCustomDirectives]'
   })
   export class CustomDirectivesDirective {
     constructor(private elementRef: ElementRef) {
       // Access and manipulate the DOM element
       this.elementRef.nativeElement.style.color = 'red';
     }
   }
   ```
---
---

`git push origin custom_directive`
`ng generate directive directives/customWithParams --skip-tests` : for skipping spec file