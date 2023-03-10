const database = require("./database");

const getMovies = (req, res) => {
  database
    .query("select * from movies")
    .then(([movies]) => {
      res.status(200).send(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from movies where id = ?", [id])
    .then(([movies]) => {
      res.status(200).send(movies);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving movies from database");
    });
};

module.exports = {
  getMovies,
  getMovieById,
};
