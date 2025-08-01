# Unow Frontend

This is the frontend side for the unow test. This project was designed using React and a little of DDD, so every module (Admin, User) has their own folder and an additional shared folder for common components, hooks or services.

## Setting up

First of all, clone this repository:

```sh
git clone https://github.com/nasquevedo/unow-frontend.git
```
Copy the .env.local content into the .env file: ```cp .env.local .env``` and replace the variables with the info that was sent in the email

Then, install the dependencies:

```sh
npm install
```

After that, run the container using the docker-compose file like this:

```sh
docker-compose up -d --build
```

Finally, visit localhost:
(http://localhost:3000/)[http://localhost:3000/]
