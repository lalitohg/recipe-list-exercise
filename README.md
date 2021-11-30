# recipe-list-exercise
Exercise project to show proof of concept on building an application's front and back ends

## System requirements

You will need to have git and docker installed before attempting to run this project.

Please visit their respective sites in case you need further instruction on how to get them installed in your system:
- https://git-scm.com/downloads
- https://www.docker.com/get-started

## First time set up

After clonning repo and changing dir into project folder you get things installed with `docker compose up` (this might take a while)

After some downloading things will crash and that's expected so terminate processes if they are still running by hitting `control + c`

To install back-end related packages locally run `docker run --rm -it --name installer -v $PWD/api:/usr/src/app -w /usr/src/app node:16-bullseye npm install`

Now you can start project with `docker compose up -d`
