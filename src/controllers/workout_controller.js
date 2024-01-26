// so in this controller, we are catching all request by the router and are creating methods 
// for the requests.
// possible requests are
// 1. get all requests
// 2. get an existing workout
// 3. update an existing workout
// 4. create a new workout
// 5. delete workouts

const service = require("../services/workout_service");
//after I have loaded the services here, I will be using them in my controller
// the data being held by the services will be returned to the controller so
// the controller can handle the request of the data
const getallworkouts = (req, res) =>
{
    // allworkouts here will be an element of data
    const allworkouts =  service.getallworkouts();
    res.send({ status: "OK" , 
    data : allworkouts });
};

const getanexistingworkout = (req, res) =>
{
    const one_workout = service.getanexistingworkout();
    res.send("get an existing workout");
};

const updateoneworkout = (req, res) =>
{
    const updated_workout = service.updateoneworkout();
    res.send("update an existing workout");
};

const createnewworkout = (req, res) => 
{
    const { body } = req;
    if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
    ) {
        return;
    }

    const new_workout = {
        name : body.name,
        mode : body.mode,
        equipment : body.equipment,
        exercises : body.exercises,
        trainerTips : body.trainerTips,

    };
    const created_workout = service.createnewworkout(new_workout);
    res.status(201).send( {status: "OK" , data : created_workout});
};

const deleteoneworkout = (req, res) =>
{
    const deleted_workout = service.deleteoneworkout();
    res.send("delete one workout");
};

module.exports = {
    getallworkouts,
    getanexistingworkout,
    updateoneworkout,
    createnewworkout,
    deleteoneworkout,
};