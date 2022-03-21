# Project's name

*Ironhack-server-Project-M3*
*Pokkemon App*
*Version JS Platinum*

## Description 

A pokemon searching cards app where people can create Pokemon cards and collect your favorites ones and show them in your profile.

## Setup
- Fork this repo
- Clone this repo
```js
$ cd server-projectM3-jwt
$ npm install
$ npm run main
```

## User Actions

- 404: As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- Sign up: As an user I can sign up in the platform.

- Login: As a user I can login to the platform and go to my profile/dashboard.

- Logout: As a user I can logout from the platform so no one else can use it.

- Edit profiles As a user I can edit my profile.

## Requirements
### Authentication

- auth.login(user)
- auth.signup(user)
- auth.logout()

### Models
```js
User model

{
    userName: String,
    email: String,
    hashedPassword: String,
}

Card Poke model

{
	cardID: Number,
	image: String,
	name: String ,
	element: String,
	description: String,
	attack: Number,
	HP: Number,
	ability: String,
}
```

## Routes


|            |                                     |                                                              |                |              |                        |
| ---------- | ----------------------------------- | ------------------------------------------------------------ | -------------- | ------------ | ---------------------- |
| **Method** | **Route**                           | **Description**                                              | Success status | Error status | Request - Body         |
| `GET`      | `/`                                 | Main Pokemon page route.                                     |                |              |                        |
| `GET`      | `auth/login`                        | Renders `login` form view.                                   |                |              |                        |
| `POST`     | `auth//login`                       | Sends Login form data to the server.                         | 200            | 401          | { email, password }    |
| `GET`      | `auth/signup`                       | Renders `signup` options.                                    | 201            | 404          |                        |
| `GET`      | `auth/signup-user`                  | Renders `signup` form view for user.                         | 201            | 404          |                        |
| `POST`     | `auth/signup-user`                  | Sends Sign Up info to the server and creates user in the DB  | 201            | 404          | { email, password }    |     
| `GET`      | `/private/userprofile`              | Shows user profile details with cards                        |                |              |                        |
| `GET`      | `/private/edit-userprofile`         | Private route. Shows`edit-profile user` form                 |                |              |                        |
<br>

## Backlog
-  Social Network
-  Meeting point trough the map view

# Deploy
https://dashboard.heroku.com/apps/projectm3pok/deploy/github
