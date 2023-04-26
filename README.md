## Lex's Comments

I have implemented the basic features as mentioned below in the task. I have not implemented any additional features like sorting or filtering as I did not have time to do so.

I have implemented tests using cypress as this was the most familiar and quickest option to me at this moment.

In order to run the tests in the interactive cypress window you will need to have the application running and then run the following command:

```bash
npm run cypress
```

This will open the cypress window and you can then select the test you wish to run.

Alternatively you can run cypress headless as you would in CI to get console test output by running the following commands:

```bash
npm run build
npm run test
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed
We would like you to clone this repository and amend the home page to display a list of Cards with the launches data retrieved from the spacex data API. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:
- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:
- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.
