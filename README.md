# Pipes in Angular

In Angular, pipes are used to transform the data before displaying it in the template. They provide a way to format and manipulate the data in a consistent and reusable manner. Pipes can be used to perform operations such as filtering, sorting, formatting dates, and more.

## Some most common uses pipes mentioned here with example

  - formatting
  - Lowercase
  - Uppercase
  - Titlecase
  - Date pipe
  - Decimal pipe
  - Percent pipe 
  - Currency pipe
  - KeyValue pipe
  - Slice pipe

---
---
## **`Formatting`** 👍👍👍

### **1. `Currency Pipe`:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ price | currency: 'USD' }}</p>
    <p>{{ price | currency: 'EUR' }}</p>
  `
})
export class AppComponent {
  price = 123.45;
}
```

In this example, we have a `price` variable in the `AppComponent` class.

In the template, we're using the `currency` pipe to format the `price` variable as a currency value. We specify the currency format as an argument to the `currency` pipe. In the first case, we format the `price` variable as USD (US Dollars), and in the second case, we format it as EUR (Euros).

The output of the above code will be:

```
$123.45
€123.45
```

In this example, the `currency` pipe formats the `price` variable as a currency value in the specified currency format.

### **2. `Date Pipe`:** 👍👍👍

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ today | date: 'dd/MM/yyyy' }}</p>
    <p>{{ today | date: 'MMM d, y' }}</p>
  `
})
export class AppComponent {
  today = new Date();
}
```

In this example, we have a `today` variable in the `AppComponent` class which holds the current date.

In the template, we're using the `date` pipe to format the `today` variable as a date. We specify the date format as an argument to the `date` pipe. In the first case, we format the `today` variable as 'dd/MM/yyyy', and in the second case, we format it as 'MMM d, y'.

The output of the above code will vary depending on the current date, but an example output could be:

```
31/05/2023
May 31, 2023
```

In this example, the `date` pipe formats the `today` variable as a date in the specified format.

### **3. `Decimal Pipe`:** 👍👍👍

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ number | number: '1.2-2' }}</p>
    <p>{{ number | number: '1.0-0'

 }}</p>
  `
})
export class AppComponent {
  number = 12345.67;
}
```

In this example, we have a `number` variable in the `AppComponent` class.

In the template, we're using the `number` pipe to format the `number` variable as a decimal value. We specify the format as an argument to the `number` pipe. In the first case, we format the `number` variable to have at least one digit before the decimal point and a minimum of two and a maximum of two digits after the decimal point. In the second case, we format it to have no digits after the decimal point.

The output of the above code will be:

```
12,345.67
12,346
```

In this example, the `number` pipe formats the `number` variable as a decimal value in the specified format.

### **4. `Percent Pipe`:** 👍👍👍

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ value | percent }}</p>
  `
})
export class AppComponent {
  value = 0.25;
}
```

In this example, we have a `value` variable in the `AppComponent` class.

In the template, we're using the `percent` pipe to format the `value` variable as a percentage value.

The output of the above code will be:

```
25%
```

In this example, the `percent` pipe formats the `value` variable as a percentage value by multiplying it by 100 and adding a percentage symbol.

---
---

### **5. `Lowercase Pipe`:**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ text | lowercase }}</p>
  `
})
export class AppComponent {
  text = 'Hello World';
}
```

In this example, we have a `text` variable in the `AppComponent` class.

In the template, we're using the `lowercase` pipe to transform the `text` variable to lowercase.

The output of the above code will be:

```
hello world
```

In this example, the `lowercase` pipe converts the `text` variable to lowercase.

### **6. ``Uppercase Pipe`:**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ text | uppercase }}</p>
  `
})
export class AppComponent {
  text = 'Hello World';
}
```

In this example, we have a `text` variable in the `AppComponent` class.

In the template, we're using the `uppercase` pipe to transform the `text` variable to uppercase.

The output of the above code will be:

```
HELLO WORLD
```

In this example, the `uppercase` pipe converts the `text` variable to uppercase.

### **7. `Titlecase Pipe`:**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ text | titlecase }}</p>
  `
})
export class AppComponent {
  text = 'hello world';
}
```

In this example, we have a `text` variable in the `AppComponent` class.

In the template, we're using the `titlecase` pipe to transform the `text` variable to title case.

The output of the above code will be:

```
Hello World
```

In this example, the `titlecase` pipe converts the `text` variable to title case, where the first letter of each word is capitalized.

---
---

## **`Slice Pipe`** 👍👍👍

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ text | slice: 0:10 }}</p>
  `
})
export class AppComponent {
  text = 'This is a sample text';
}
```

In this example, we have a `text` variable in the `AppComponent` class.

In the template, we're using the `slice` pipe to extract a portion of the `text` variable. We specify the start and end indices as arguments to the `slice` pipe. In this case, we extract characters from index 0 to 10.

The output of the above code will be:

```
This is a
```

In this example, the `slice` pipe extracts the characters from index 0 to 10 from the `text` variable.

---
---

## **`KeyValue Pipe`** 👍👍👍

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let item of data | keyvalue">{{ item.key }}: {{ item.value }}</li>
    </ul>
  `
})
export class AppComponent {
  data = {
    name: 'John',
    age: 25,
    city: 'New York'
  };
}
```

In this example, we have an object `data` in the

 `AppComponent` class.

In the template, we're using the `keyvalue` pipe to iterate over the properties of the `data` object and display them as key-value pairs.

The `*ngFor` directive iterates over the key-value pairs generated by the `keyvalue` pipe, and we display each key-value pair in a list item.

The output of the above code will be:

```
- name: John
- age: 25
- city: New York
```

In this example, the `keyvalue` pipe converts the `data` object into an array of key-value pairs, which is then iterated over using `*ngFor`.

---
---

## **`Json Pipe`** 👍👍👍

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ data | json }}</p>
  `
})
export class AppComponent {
  data = { name: 'John', age: 25, city: 'New York' };
}
```

In this example, we have an object `data` in the `AppComponent` class.

In the template, we're using the `json` pipe to format the `data` object as a JSON string.

The output of the above code will be:

```
{"name":"John","age":25,"city":"New York"}
```

In this example, the `json` pipe formats the `data` object as a JSON string representation.

---
---

`git push origin pipes`