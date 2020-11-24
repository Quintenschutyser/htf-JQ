# HTF 2020: Game Web Tech Challenge

## Server
Start the server by running (from the `src/server` folder)

```
// NPM
npm run start

// Yarn
yarn start
```

## Docker

You can also run the project locally with docker. You will need to have docker installed on your device. Please check [the official docs to complete the installation process](https://docs.docker.com/get-docker/).

Once docker is installed you can simply run the project with `docker-compose up --build`. The project will then be available on [localhost (port: 80)](http://localhost:80)

## Deploy to Heroku

To deploy the app to Heroku, you will need to build the container and then release it. If you don't have the `heroku-cli` installed on your device yet, you can install it via homebrew on mac with the following command `brew install heroku/brew/heroku`. If you are using a Windows device, please check the official Heroku docs to get [the correct installer](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up). On a Linux device you can install using snap: `sudo snap install heroku --classic`. You will also need to create a heroku account on which to run your project.

Once the heroku-cli is installed, in the root of your repo, you can use the following commands in the order they are listed:

Command | Description
------------ | -------------
`Heroku login` | Connect your local repo to your heroku account.
`Heroku create` | Create a new heroku app. This will provide you with a link to where your project will run. You can change the name on the heroku website.
`heroku stack:set container` | This will indicate that your project will be run in a docker container.
`heroku container:login` | This will give you access to your container to allow builds and releases.
`heroku container:push web` | This will trigger a new container build.
`heroku container:release web` | This will release your latest successful container built. Now visit your project link and go check it out!

## Resources

In `stories.json` you can find an array with 11 stories for you to use in your game. Good luck! 