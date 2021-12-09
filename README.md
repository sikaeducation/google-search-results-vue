# Google Component Hierarchies Scrimmage

Your task is to use Vue components to recreate this:

![Google search results](./google-search-results.png)

The final HTML and CSS is loaded into the `/google.com/src/App.vue` file. Your task is to:

* Break both of those up into appropriately-sized components
* Replace all of the hard-coded data with data from the state that's been loaded into the App component

Some notes:

* Your solution does not need to be adaptive or responsive
* Some properties need to be interpreted. For example, most dates will need to be put in the correct format. A package such as * dayjs or date-fns is recommended.

## Requirements

* `docker` and `docker-compose`

## Scripts

* `npm start` - Runs development server
* `npm test` - Runs e2e tests
