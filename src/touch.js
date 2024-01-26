// we load our whole complete express framework into express variable
// so we can call every member function of the express class
const express = require("express"); 

// we load our router module here
const v1WorkRouter = require("./v1/routes/WorkoutRoute");

// default constructor of express to instantiate an object of express class into app
// now we perform every function call on app 
const app = express();

const parser = require("body-parser");

// we will need our PORT now
// so let's initialize our port
// SO what I'm seeing here is that port is either 3000 or
// the port of our environment process
const PORT = process.env.PORT || 3000

//we perform every member function call on our app
//since we have no known endpoint now, we get from our root directory
//logically we are fetching from our root directory now. res.send is our response
// where are you fetching from? root directory
//app.get("/", (req, res) => {res.send("<h2>it is working nowww</h2>")});


// we have to hook up our router here
// app.use to use our router
// /api/v1/WorkRoutes is the endpoints through which we fetch and get data
app.use("/api/v1/Workouts", v1WorkRouter);

// we are parsing our requests in JSON format so we can make POST REQUESTS
app.use(parser.json());




// we set our API to listen on port 3000 now 
// the response we set is what is popping on the internet
app.listen(PORT, ()=> {console.log(`API is listening on ${PORT}`)});





