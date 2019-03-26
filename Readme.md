# Garden Roots
Helping to make the world greener, one gardener at a time

## A single page web app
A web app that will allow users create garden beds based on the various planting zones they have to work with.
### Users Can
* Create a new Garden Bed
* Select the amount of sun this area recieves
* Select the type of soil this area has
* Recieve recomended plants based on these traits


## Backend Models
* Garden Beds
* Bed Plants
* Plants

## Start the App
1. `bundle` to install dependencies
2. `rails db:migrate` to create database
3. `rals db:seed` to build  plants table
4.`rails s` inside the garden-api folder
5. open `index.html` 
6. get creative

## API Routes
* /garden_beds
    * Returns all garden beds in the database
* /garden_bes/:id
    * Returns details for garden bed at :id and returns associated plants
* /plants
    * Returns all plants in the database
* /plants/:id
    * Returns one plant in the database
* /suggest/:id
    * Returns a list of suggested plants based on properties of garden bed at :id