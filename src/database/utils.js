//overwrites our JSON file to persist the data
const fs = require("fs");

const save_to_database = (DB) =>
{
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null,2),{
        encoding : "utf-8",
    });
};

module.exports = {
    save_to_database
};