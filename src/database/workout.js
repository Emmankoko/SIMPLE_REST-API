const DB = require("./db.json");
const { save_to_database } = require("./utils");

const getallworkouts = () =>
{
    return DB.workouts;
};

const createnewworkout = (newworkout) =>
{
    const is_already_added = DB.workouts.findIndex((workouts) => workouts.name === newworkout.name) > -1;
    if (is_already_added)
    {
        return;
    }
    DB.workouts.push(newworkout);
    save_to_database(DB);
    return newworkout;
}

module.exports = {
    getallworkouts,
    createnewworkout,
};