# Invision Back-End Application

<hr/>

Base URL of the Back-End for API Testing: `https://invision-backend.herokuapp.com`

**AVAILABLE METHODS**:

* Path: `/signin`

Method: POST

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

<hr/>

* Path: `/signup`

Method: POST

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
