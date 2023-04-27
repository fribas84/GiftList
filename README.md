# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the depedencies.

There are three folders in this repository:

## Client

Inside the client folder, there is a merkle-tree-client folder which is a react app. Just do a `npm install` and `npm run dev`

## Server

You can run the server from the top-level directory with `node server/index`. This file is an express server which will be hosted on port 1225 and respond to the client's request.

## Solution
Created a React app that calls the backend server to validate if the name is in the list.
The server will verify the proof, and reply if the name is in the list or not.

