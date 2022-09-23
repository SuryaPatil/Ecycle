const { Pool } = require("pg")

const pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "Ju!iu5Ca35arP",
    host: "localhost",
    port:"5432",
    database:"jwwttutorial"
});

module.export = pool; 