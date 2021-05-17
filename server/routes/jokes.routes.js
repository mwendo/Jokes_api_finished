const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateOneJoke);
}