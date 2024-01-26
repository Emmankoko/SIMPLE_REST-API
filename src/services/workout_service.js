// when communicating with an API, you send data with your requests or
// receive data with your response

// we will create our methods for our controllers in our service layer

//Inside our service methods we'll be handling our business logic 
//like transforming data structures and communicating with our Database Layer.

//bringing my database here
const { v4 : uuid } = require("uuid");
const data = require("../database/workout")
const getallworkouts = () =>
{
    const allworkout = data.getallworkouts();
    return allworkout;
};

const getanexistingworkout = () =>
{
    return;
};

const createnewworkout = (newworkout) =>
{
    const workout_to_insert = {
        ...newworkout,
        id : uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    const created_workout = workout.createnewworkout(workout_to_insert);
    return created_workout;
};

const updateoneworkout = () =>
{
    return;
};

const deleteoneworkout = () =>
{
    return;
};

module.exports = {
    getallworkouts,
    getanexistingworkout,
    createnewworkout,
    updateoneworkout,
    deleteoneworkout,
};