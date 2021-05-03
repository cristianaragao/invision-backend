# Invision Back-End Application

<hr/>

Application used to be the Back-End of Invision Web: [https://cristianaragao.github.io/signin](https://cristianaragao.github.io/signin)

Base URL of the Back-End for API Testing: `https://invision-backend.herokuapp.com`

<hr/>

**AVAILABLE METHODS**:

Path: `/signin`   Request: `POST`

Method used to sign in

Body:
```Bash
{
    "email": "user@email.com",
    "password": "123456",
    "account_google": false
}
```

`"email"` must have an Email structure

`"password"` must be 6 or more characters

`"account_google"` put `true` if you log in with Google


Path: `/signup`   Request: `POST`

Method used to register user

<br/>

Body:
```Bash
{   
    "name": "Name LastName",
    "email": "user@email.com",
    "password": "123456",
}
```

`"name"` must be a string with at least one space between characters

`"email"` must have an Email structure

`"password"` must be 6 or more characters

<hr/>

Visit the Invision Front-End Application page at: [https://cristianaragao.github.io/signin](https://cristianaragao.github.io/signin)
