const pool = require("../connection");

const query = `
    CREATE TABLE IF NOT EXISTS user_tbl (
        id serial PRIMARY KEY,
        period_date VARCHAR (255) NOT NULL,
        data_source VARCHAR (255) NOT NULL,
        number_base VARCHAR (255) NOT NULL,
        count VARCHAR (255) NOT NULL,
        no_card VARCHAR (255) NOT NULL,
        branch_name VARCHAR (255) NOT NULL,
        area VARCHAR (255) NOT NULL,
        name VARCHAR (255) NOT NULL,
        dpd VARCHAR (255) NOT NULL,
        outstanding_pokok VARCHAR (255) NOT NULL,
        outstanding_margin VARCHAR (255) NOT NULL,
        program_discount VARCHAR (255) NOT NULL
    )
`;

pool
  .query(query)
  .then((res) => {
    console.log("TABLE CREATED SUCCESFULLY");
  })
  .catch((error) => {
    console.log(error);
  });
