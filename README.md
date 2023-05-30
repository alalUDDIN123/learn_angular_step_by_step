# Play With Data Binding

This project demonstrates data binding using Angular. It allows us to enter text, adjust font size, and change text color dynamically. The following sections explain the functionality of each element in the code.

## Elements

### Text Input
```html
<input type="text" placeholder="Enter any text" (keyup)="getValue($event)">
```
This input element captures the text entered by the user and triggers the `getValue` function on each keyup event.

### Display Typed Text
```html
<p>You type: <span>{{typeText}}</span></p>
```
This paragraph element displays the text typed by the user. The `typeText` variable is used for data binding, and it will update dynamically as the user types.

### Font Size Range Slider
```html
<input type="range" (input)="getRange($event)" [value]="rangeValue" [disabled]="typeText === ''">
```
This input element is a range slider that allows the user to adjust the font size. The `getRange` function is triggered on each input event, and the `rangeValue` variable is used for data binding. The `rangeValue` variable sets the initial value of the range slider. If the text input is empty (`typeText === ''`), the range slider will be disabled.

### Increase Font Size Button
```html
<button class="inc" (click)="fontSizeSet('inc')" [disabled]="typeText === ''">+</button>
```
This button increases the font size when clicked. It triggers the `fontSizeSet` function with the parameter `'inc'`. The button is disabled if the text input is empty (`typeText === ''`).

### Decrease Font Size Button
```html
<button class="dec" (click)="fontSizeSet('dec')" [disabled]="typeText === '' || rangeValue < 1">-</button>
```
This button decreases the font size when clicked. It triggers the `fontSizeSet` function with the parameter `'dec'`. The button is disabled if the text input is empty (`typeText === ''`) or if the range value is less than 1.

### Text Color Selection
```html
<select (change)="setColor($event)" [disabled]="typeText === ''">
  <option value="" selected disabled>Select Text color</option>
  <option value="primary">Primary</option>
  <option value="secondary">Secondary</option>
  <option value="success">Success</option>
  <option value="warning">Warning</option>
  <option value="danger">Danger</option>
</select>
```
This select element allows the user to choose a text color. The `setColor` function is triggered on each change event. The select element is disabled if the text input is empty (`typeText === ''`).

### Current Font Size
```html
<p>Current font-size: {{rangeValue}}px</p>
```
This paragraph element displays the current font size value in pixels.

### Text Font Size
```html
<p>Text font-size: <span [style.fontSize.px]="rangeValue">{{typeText}}</span></p>
```
This paragraph element displays the text with a font size equal to the range value set by the user. The `style.fontSize.px` binding sets the font size dynamically based on the `rangeValue` variable.

### Font Color
```html
<p>Font Color: <span class={{textColor}} style="font-size: 40px;">{{typeText}}</span></p>
```
This paragraph element displays the text with a font color chosen by the user. The `class` binding is used to apply the text color dynamically based on the `textColor` variable. The `style.fontSize

` attribute is set to 40 pixels.