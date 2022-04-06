# Mongoose Movies 🎥
[![Status overview badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](#results)


In this assignment you will be expected to write an API for connecting to a movie database

This project assumes you've already had experience with:

> - Mongoose Schemas
> - Mongoose references
> - Building routes and endpoints in Express

## Tasks

Before starting these tasks, run the command `npm install` or `npm i`

This will automatically install the following packages:
- express
- mongoose
- dotenv

## Task 1 - Sample data

Before we can begin, we will load a sample dataset to work with.

MongoDB provides multiple sample datasets, with sample data for us.

1. Log into your MongoDB account

2. In your main control panel, click on `Clusters`

3. Click on the 3 dots (...) and click on `Load Sample Dataset`

4. Follow the on screen instructions

> Note: It may take up to 15 minutes for the dataset to completely load

After this, you should have some new databases / collections:

> sample_airbnb
> sample_analytics
> sample_geospatial
> sample_mflix
> sample_restaurants
> sample_supplies
> sample_training
> sample_weatherdata

We will be using the `sample_mflix` database.

## Task 2 - Write a .env file

Note: For this assignment, we already assume you have a MongoDB server, and know how to access your credentials.

1. Create a file in your root folder called `.env`. This file will contain all the connection information for accessing your database.

2. Copy and paste the text in the file `.env.example`, into your `.env` file.

3. For the key `DB_NAME`, use `sample_mflix`. This will ensure that Mongoose will try and use the existing sample dataset you previously set up

4. For the other keys, fill in the details as provided to you by your MongoDB service.

   - DB_HOST=
   - DB_USER=
   - DB_PASS=
   - DB_NAME=sample_mflix

   `mongodb+srv://<DB_USER>:<DB_PASS>@<DB_HOST>/<DB_NAME>?retryWrites=true&w=majority`

## Task 3 - Preparing our server to receive requests

In the next tasks, we will create a REST API so that clients can connect and perform actions on our server. To do this, we must first begin with a few steps:

1. Install the npm package `cors`

2. Import and add `cors` to your middleware stack. This will prevent the dreaded same origin policy error in your browser.

> Remember to run your middleware before any of your routes!

3. Run `express.json()` as middleware. This will allow any JSON sent for example, with a POST request, to be correctly read by the server.

## Task 4 - Movies Schema & Model

Unfortunately the sample datasets do not come with Models or Schemas, so we must build our own to interact with these databases / collections.

1. Using the MongoDB viewing tool (or another similar tool), examine the data in the `movies` collection. What MongoDB data types are being used?

2. Create a folder `models`

3. In this folder, create a `MovieSchema` schema for the collection `movies`

4. Create a model `Movie` for your schema `MovieSchema`

> Hint: You may use `String`, `Date`, `Number`, `Boolean` as your data types

> Hint: Some values maybe held inside an array, for example a string of arrays would be represented as `[String]`

## Task 5 - Comments Schema & Model

Unfortunately the sample datasets do not come with Models or Schemas, so we must build our own to interact with these databases / collections.

1. Using the MongoDB Compass viewing tool (or another similar tool), examine the data in the `comments` collection. What MongoDB data types are being used?

2. In your `/models` folder, create a `CommentSchema` schema for the collection `comments`

3. One of the fields you will see is `movie_id`. This is reference to another collection
   - For this field, use the `ref` property, to link to the Movie collection
   - For this field, use the `type` property to link to `mongoose.Schema.Types.ObjectId` (or similar)

4. Create a model `Comment` for your schema `CommentSchema`

> Hint: You may use `String`, `Date`, `Number`, `Boolean` as your data types

## Task 6 - Creating the Movies route

The `mflix` database has quite a few collections. We can imagine that if we were to fully develop our application, it could get quite big.

Let's try and keep things organised from the start.

Create a Route `movies`

1. Create the file `movies.js` in the folder `routes` 
   - import `express`
   - create the `router` instance from `express.Router()`
   - export your `router` instance
   
2. Import your route into `server.js`
   - Use `app.use()` to use the movies router you imported
   - Use the path `/movies`

## Task 7 - Endpoint to search for movies by id

We will create an endpoint to load specific movie data, based on the movie `id`

1. Create an endpoint `/searchById` in your `movies` router. This will be a `GET` endpoint. The endpoint should expect a parameter, the movie `id`.

> Hint: In your endpoint callback you will need to use `request.params` to get the request parameters

2. Import and use your `Movie` model to find the movie by `id`, then:
    - If found, return a status of `200` and the resulting movie
    - If not found, return a status of `404` and an appropriate message
   
> Hint: You can use the method `findById()`

## Task 8 - Endpoint to search for movies by title

We will create an endpoint to search for movie data

1. Create an endpoint `/searchByTitle` in your `movies` router. This will be a `GET` endpoint
    - The endpoint should expect a parameter, the movie `title` to search by
    - The endpoint should expect a second parameter, the number of results to limit to search to

> Hint: In your endpoint callback you will need to use `request.params` to get the request parameters

2. Use your `Movie` model to find the movie by searching in the `title` field. It should:
    - Limit the results using the `limit()` method. If no value is supplied, default to `10`
    - If found, return a status of `200` and the resulting movies
    - If not found, return a status of `404` and an appropriate message

> Hint: Here you must use the `find()` method

## Task 9 - Creating the Comments route

Create a Route `comments`

1. Create the file `comments.js` in the folder `routes`
   - import `express`
   - create the `router` instance from `express.Router()`
   - export your `router` instance

2. Import your route into `server.js`
   - Use `app.use()` to use the comments router you imported
   - Use the path `/comments`

## Task 10 - Endpoint to search for comments by id

We will create an endpoint to load the comments data

1. Create an endpoint `/searchById` in your `comments` router. This will be a `GET` endpoint. The endpoint should expect a parameter, the comment `id`.

> Hint: In your endpoint callback you will need to use `request.params` to get the request parameters

2. Use your `Comment` model to find the comment by id, then:
    - If found, return a status of `200` and the resulting comment
    - If not found, return a status of `404` and an appropriate message
   
## Task 11 - Endpoint to search and update movies by id

We would like to satisfy the U in the CRUD criteria

We will create an endpoint to update specific movie data, based on the movie `id`

1. Create an endpoint `/update` in your `movies` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the movie `id`

> Hint: In your endpoint callback you will need to use `request.params` to get the request parameters

   - The endpoint should also expect a JSON object with details to update the movie document
   - Only update the following fields:
     - plot
     - title

> Hint: In your endpoint callback you will need to use `request.body` to get the request body

2. Use your `Movie` model to find the movie by `id`, then:
   - If found, return a status of `200` and the resulting movie
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 12 - Endpoint to search and update comments by id

We will create an endpoint to update specific comment text, based on the comment `id`

Do not allow the user to update any other details, other than the text!

1. Create an endpoint `/update` in your `comments` router. This will be a `PATCH` endpoint.
   - The endpoint should expect a parameter, the comment `id`
   - The endpoint should expect a JSON object with 1 property, the new text to update the comment

2. Use your `Comment` model to find the movie by `id`, then:
   - If found, return a status of `200` and the resulting updated comment text
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndUpdate()`

## Task 13 - Endpoint to search and delete movies by id

We will create an endpoint to search for and delete a movie based on the movie `id`

1. Create an endpoint `/delete` in your `movies` router. This will be a `DELETE` endpoint. The endpoint should expect a parameter, the movie `id`.

2. Use your `Movie` model to find the movie by `id`, then:
   - If found, return a status of `200` and an appropriate message
   - If not found, return a status of `404` and an appropriate message
   
> Hint: You can use the method `findByIdAndDelete()`

## Task 14 - Endpoint to search and delete comments by id

We will create an endpoint to search for and delete a comment based on the comment `id`

1. Create an endpoint `/delete` in your `movies` router. This will be a `DELETE` endpoint. The endpoint should expect a parameter, the comment `id`.

2. Use your `Comment` model to find the comment by `id`, then:
   - If found, return a status of `200` and an appropriate message
   - If not found, return a status of `404` and an appropriate message

> Hint: You can use the method `findByIdAndDelete()`

## Task 15 - Populating our comments

Our `comments` collection uses a reference to get data from the `movies` collection.

We will update our comments endpoint to return the populated movie data

1. Update the `/searchById` endpoint to use the `populate()` method on the `movie_id` field.

2. Test that your endpoint gives you the correct result

[//]: # (autograding info start)
## Results


### Task 10: Endpoint to search for comment by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status0.svg) | 1.Create an endpoint `/searchById` in your `comments` router. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status1.svg) | 2.Should return status of 200 if found. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status2.svg) | 3.Should return status of 404 if not found. |

### Task 11: Endpoint to search and update movies by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status3.svg) | 1.Create an endpoint `/update` in your `movies` router with PATCH and id params |

### Task 12: Endpoint to search and update comments by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status4.svg) | 1.Create an endpoint `/update` in your `comments` router with PATCH and id params |

### Task 13: Endpoint to search and delete movies by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status5.svg) | 1.Create an endpoint `/delete` in your `movies` router` router with DELETE endpoint and id params |

### Task 14: Endpoint to search and delete comments by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status6.svg) | 1.Create an endpoint `/delete` in your `comments` router` router with DELETE endpoint and id params |

### Task 2:check `.env` file.

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status7.svg) | 1.process.env.DB_USER,process.env.DB_PASS,process.env.DB_HOST,process.env.DB_NAME should be used |

### Task.3 Preparing our server to receive requests

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status8.svg) | check  server required `cors` package |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status9.svg) | check app uses corse as middleware |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status10.svg) | check app uses express.json() as middleware |

### Task.4 Movies Schema & Model.

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status11.svg) | 1.models Folder should be exist. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status12.svg) | 2.MovieSchema Schema should be defined |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status13.svg) | 3.model should be created |

### Task.5 CommentSchema & Model.

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status14.svg) | 1.Comment file should be exist. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status15.svg) | 2.CommentSchema Schema should be defined |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status16.svg) | 3.movie_id should be defined and  reference to another collection |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status17.svg) | 4.model should be created |

### Task.6 Creating the Movies route

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status18.svg) | 1.Create the file `movies.js` in the folder `routes` |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status19.svg) | 2.Express should be imported |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status20.svg) | 3.Router instance should be created |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status21.svg) | 4.Router should be exported |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status22.svg) | 5.route should be imported into server.js |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status23.svg) | 6.app.use() should be used to use movies router and path /movies should be used  |

### Task 7: Endpoint to search for movies by id

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status24.svg) | 1.Create an endpoint `/searchById` in your `movies` router. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status25.svg) | 2.Should return status of 200 if found. |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status26.svg) | 3.Should return status of 404 if not found. |

### Task 8: Endpoint to search for movies by title

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status27.svg) | find movie by title should be used |

### Task.9 Creating the Comments route

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status28.svg) | 1.Create the file `comments.js` in the folder `routes` |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status29.svg) | 2.Express should be imported |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status30.svg) | 3.Router instance should be created |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status31.svg) | 4.Router should be exported |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status32.svg) | 5.route should be imported into server.js |
| ![Status](../../blob/badges/.github/badges/autograding-solution/status33.svg) | 6.app.use() should be used to use movies router and path /movies should be used  |



[🔬 Results Details](https://github.com/DigitalCareerInstitute/BE-Db-Movies-Rest-Api/actions)

[📢 Give Feedback or Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=BE-Db-Movies-Rest-Api&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBE-Db-Movies-Rest-Api)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/BE-Db-Movies-Rest-Api/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)