# recipe-list-exercise
Exercise project to show proof of concept on building an application's front and back ends

## System requirements

You will need to have git and docker installed before attempting to run this project.

Please visit their respective sites in case you need further instruction on how to get them installed in your system:
- https://git-scm.com/downloads
- https://www.docker.com/get-started

## First time set up

After clonning repo and changing dir into project folder you will need to copy some sample .env files to start editing later to get app to work as you like it

`cp ./api/.env{.sample,}`

You might want to open up __./api/.env__ file and make sure things look right and if you want to really make the project run as in development mode you will need to change __NODE_ENV__ to _"dev"_ to have things like GraphiQl available.

Install project dependencies for API with:

`docker run --rm -it --name installer -v $PWD/api:/usr/src/app -w /usr/src/app node:16-bullseye npm install`

Install project dependencies for front end app with:

`docker run --rm -it --name installer -v $PWD/front:/usr/src/app -w /usr/src/app node:16-bullseye npm install`

Now you can start project with `docker compose up -d`

Now you can open up your web browser and visit:

Web app: http://localhost:3000

GraphiQl app (if _NODE_ENV_ is set to __dev__ in _./api/.env_): http://localhost:4000/graphql

Kibana app: http://localhost:5601/

You might need to wait for all services to be fully up and running before doing anything else. You could visit your Kibana instance to check if things are ready (usually Kibana takes longer to be fully up).

Before you can start using the apps you need to create sample data for the project widh:

`docker compose exec -w /usr/src/app api npm run create_index`

`docker compose exec -w /usr/src/app api npm run seed`

And that's it. Visit the web app and start clicking around. To clear filters just leave search term input empty and hit the search button again.

## Technical overview

After much consideration I decided to implement the API on top of an Elastic Search service because data implies heavy full-text searches, something Elastic Search excels at without much config overhead to get a prototype up an running. It is expected that adding more data would mean implementing yet another type of DB alongside Elastic Search, depending on the shape and use of such data.

To query the Elastic Search index I opted in for using GraphQl since, from a consumer perspective, it's very clear what data you can get from the API and how to ge it.

In the front end I decided to implement Material UI on a ReactJS application bootstraped with create-react-app to allow for short and quick prototyping.

Due to time constraints, testing is not implemented at this point, but only because TDD was not the fastest implementation technique to follow so early in the project. At this point, there's enough code base to implement tests and keep project lifecycle with testing included as part of acceptance criteria in further tickets.