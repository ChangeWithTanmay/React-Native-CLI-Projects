# React-Native CLI Project with Multi-File

## Project: 1
## Project 2

#### Yup is a npm package, to help big project. That is use for Validation. 

1. This package are very common use podaction grade project..

##### wey 1
```javascript
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 character')
  .max(16, 'Sould be max of 16 character')
  .required('Length is required')
})
```

##### wey 2
```javascript
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});
```
#### Formik

Create a Form in React\ReactNative-CLI project. Oviusly use this NPM package.

#### react-native-bouncy-checkbox

It is a very populer Libery, Usecase is add bouncy box in your app.