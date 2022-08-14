# connect

This codebase has four main sub-folders:
1. server -
  This is the backend which connects to mongodb and contains all the app logic. All the three frontends interact with the same server.
2. client_react -
  This is the frontend written in React.
3. client_angular -
  This is the frontend written in Angular.
4. client_vue -
  This is the frontend written in Vue.


RUNNING THE APP  

1.Use the command "npm install" inside all four sub-folders to install all required dependencies.

Commands to run the app:
1. server -
  In server/index.js, use you own CONNECTION_URL to connect to mongoDb. 
  Inside server directory, run "npm start".
2. React -
  Inside client_react directory, run "npm start". The local server will run at "http://localhost:3000/".
3. Angular -
  Inside client_angular directory, run "npm run start". The local server will run at "http://localhost:4200/".
4. Vue - 
  Inside client_vue directory, run "npm run serve". The local server will run at "http://localhost:8080/".

