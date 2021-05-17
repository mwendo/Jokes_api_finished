// const { Mongoose } = require("mongoose");
const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({joke: allJokes}))
        .catch(err => res.json({message: "didn't quite work out there bud", error: err}));
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({message: "didn't quite work out there bud hehe", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "didn't quite work out there budy hehe"}));
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke => res.json({joke: deletedJoke}))
        .catch(err => res.json({message: "didn't quite work out there budy hehe"}));
}

module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true,runValidators:true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "didn't quite work out there budy hehe"}));
}