const Idea = require('../models/idea');

module.exports.list = (req, res) => {
    Idea.find().populate('user').exec((err, ideas) => {
        if (err) {
            throw new Error('Error get products');
        }

        res.json(ideas).status(200);
    })
}

module.exports.create = (req, res) => {
    console.log('new idea');

    const idea = new Idea(req.body);
    idea.save((err, idea) => {
        if (err) {
            throw  new Error('Error add idea');
        }
        res.json(idea);
    });
}

module.exports.like = (req, res) => {

    const id = req.params.id;
    Idea.findOne({_id: id}, (err, ideaObj) => {
        if (err) throw err;

        ideaObj.rating = ideaObj.rating += 1;


        ideaObj.save((err, saved) => {
            if (err) throw err;

            res.json(saved);
        });

    });
}



