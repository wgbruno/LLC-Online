# LLC-Online
A senior project website for Loyola University Maryland's Language Learning Center (LLC)

<img src="https://github.com/wgbruno/LLC-Online/blob/main/View/llc-online/src/assets/Copy%20of%20Loyola_LLC_RGB.png" width="250" height="250">

## Project Details
### User Stories
https://docs.google.com/spreadsheets/d/1ll_0CB1wm7T0CVFjbVKVrwRJXRSc70bD2MGZeZtH1Q4/edit

### Design & UI
https://docs.google.com/document/d/19mV-AUN21dJ_U5NRoEV09AY_jbO7pwPygKa55r0Cxm0/edit?usp=sharing

### Iteration Planning
https://docs.google.com/document/d/1OzT9LpgdrSHTOypqF-QnckkMBld7rKaLN2_sMPCHfD4/edit?usp=sharing

### Current Coverage Report

<img src="https://github.com/wgbruno/LLC-Online/blob/main/frontendtesting.png" width="700" height="500">
<img src="https://github.com/wgbruno/LLC-Online/blob/main/backendtesting.png" width="700" height="150">

## Node Express Instructions (Backend)
### 1.) Installing necessary components
Once in the correct directory for the project, use the following command to install all modules listed in the ```packages.json``` file:
```
npm install
```
Be sure that packages.json is up to date.

### 2.) Run the server
To run the Node Express server, make sure you are in the project directory that contains the ```server.js``` file and use the following command to run the file:
```
node server.js
```
The server is running successfully if the generated output includes something similar to the following: ```Server Running on localhost:4000...```

## React Instructions (Frontend)
### 1.) Navigate directories
To ensure that React runs correctly, make sure you are in the ```llc-online``` folder within the ```View``` folder located in the root project directory (where ```README.md``` is located). Use the following command while you are in the root project directory:
```
cd .\View\llc-online\
```

### 2.) Running the React app
To run React, simple use the following command:
```
npm start
```
The website should generate in a new tab in your default browser as ```http://localhost:3000/```.

## Testing Instructions
* Install Jest as a module in your Node Express: ```npm install jest``` in the React project directory (where ```npm start``` is ran) 
* Add the test script in ```packages.json```
* Use the following command to display a testing coverage report for the project:
```
npm test -- --coverage
```
