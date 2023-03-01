const db = require('../models');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

function getTime(){
    return new Date().toLocaleString();
};

const create = (jsonParser, req,res)=> {
    db.Post.create(req.body)
        .then(post=>{
            res.json({ msg: 'Post successful', data:post})
        })
        .catch(err=>console.log(req.body));
};

const index = (req,res) => {
    db.Post.find()
        .then(posts=>res.json(posts))
};

const show = (req,res) => {
    db.Post.findById(req.params.id, req.body)
        .then(post=>res.json({data: post}))
}

const destroy = (req,res)=> {
    db.Post.findByIdAndDelete(req.params.id, req.body)
        .then(post=>{
            console.log(req.params.id)
            res.json({msg:'Success', post})
        })
        .catch(err=>console.log(req.params.id))
};

module.exports = {
    create,
    index,
    show,
    destroy
}