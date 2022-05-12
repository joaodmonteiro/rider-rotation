# Rider Rotation

## Introduction

Rider Rotation is a dashboard web application that I made for Gorillas, a grocery delivery company.

Gorillas provides grocery items delivered in less than 15 minutes and it does so by having multiple warehouses spread around the city from which they deliver.
The deliveries are all made on electric bikes and the Riders deliver the goods by making trips from and to the warehouse.
So this app was created to be a tool used by the Gorillas warehouse team in order to manage the state of all the riders and bikes.

![Screenshot] (./login-screenshot.png)
![Screenshot] (./bikes-screenshot.png)

## Stack

- HTML
- CSS
- Javascript
- Firebase
- Webpack

## Deployment

Deployed with Github Pages. You can take a look at the [website here](https://joaodmonteiro.github.io/rider-rotation).

## How it works

The website is divided into 3 sections: Rotation, Riders and Bikes.

### Rotation

Rotation is the core feature of the website.

It allows for the user to keep track of which riders are currently available to take an order, which ones are on a ride and those that are on break.

It works with a queue system, meaning the last rider to go (on a ride), will be the last one on the ‘On a ride’ list, and the last one coming back from an order will be the last one in the ‘Available” queue.
This is in order for the warehouse supervisor to keep track of the order in which the riders come back. And that way can better balance the orders between the riders fairly.

When a rider goes on break, there is a countdown timer to keep track of when that break ends.

### Riders

The riders contains all of the riders that work in that particular warehouse. It allows for the user to add and delete riders and it is the pool of riders from which the user can select to include in the rotation.

### Bikes

This page controls the state of the bikes currently at the warehouse. Each bike has its own unique ID and this section allows for the user to change the state of the bike between “In Action” and “Out of Action”.

## How it was made

The front-end of this project was done with vanilla javascript and custom CSS. For the backend, I used FIrebase. Firestore for the database containing the riders and bikes, and Firebase Authentication for the User Authentication.
I also used localStorage to save the state of each rider on the rider rotation. This allows the user to be able to refresh or close the page and still not lose that information. It also loads faster than fetching it from Firebase.
To create the development server and bundling for production I used Webpack.
