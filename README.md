# Authentication

<h1>
    <a href=""><img src="https://github.com/edpadua/Authentication/blob/main/authentication/public/authentication-capture.gif"></a>
</h1>

# Summary

- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)
- [Contact](#contact)
 
## About

This project consists of a user registration form with name, email, password and confirmed password fields. . When clicking on the register button, each field is validated according to the expected data type, if valid the data is inserted into the simulated API created for this test.

Among the main purposes of this system is the use of the react-form-hook library together with the validation of the Yup library, with which it is possible to create a schema with the specifications of the expected values for each input field. In addition, for the styles, Tailwind CSS was used again, but this time together with the tailwind-styled-components library, which works in the same way as the traditional styled-components, but with Tailwind CSS classes.
To simulate the Rest API, the JSONServer library was used as well as Axios to consume the API. The user login functionality would be the next step to be implemented.

As in the previous project, this one was developed with TypeScript.

### Screeshot - Desktop

![image](https://github.com/edpadua/Authentication/assets/4975360/b84d3967-7406-4826-a0a2-9fd2bb466d81)

### Screeshot - Tablet

![image](https://github.com/edpadua/Authentication/assets/4975360/6cde5f69-1bf4-4521-8c0b-73cab2ffda11)


### Screeshot - Mobile

<img src="https://github.com/edpadua/Authentication/assets/4975360/da6466c3-dd26-4cd0-ab24-21ee5f08eb9c" style="width: 50%;" >



### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/guide/)
- [Tailwind Styled-Components](https://www.npmjs.com/package/tailwind-styled-components)
- [React Form Hook](https://www.react-hook-form.com)
- [Axios](https://www.npmjs.com/package/axios)
- [Yup](https://www.npmjs.com/package/yup)
- [Json Server](https://www.npmjs.com/package/json-server)
- [Tailwind CSS](https://tailwindcss.com/)

## Setup

Terminal 1 

```bash
json-server --watch db.json
```

Terminal 2 

```bash
git clone https://github.com/edpadua/authentication

cd expenses
npm i
npm run dev
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com
