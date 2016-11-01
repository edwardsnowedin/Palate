const { MongoClient, ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');

const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/recipe';


function getFavorites(req, res, next) {
 // find all favorites for your userId
 getDB().then((db) => {
   db.collection('faves')
     .find({ userId: { $eq: req.session.userId } })
     .toArray((toArrErr, data) => {
       if(toArrErr) return next(toArrErr);
       res.favorites = data;
       db.close();
       next();
     });
     return false;
 });
 return false;
}

function savedRecipes(req, res, next) {
// creating an empty object for the insertObj
const insertObj = {};
// copying all of req.body into insertObj
for(key in req.body) {
  insertObj[key] = req.body[key];
}
// Adding userId to insertObj
insertObj.userId = req.session.userId;
getDB().then((db) => {
  db.collection('faves')
    .insert(insertObj, (insertErr, result) => {
      if (insertErr) return next(insertErr);
      res.saved = result;
      db.close();
      next();
    });
    return false;
});
return false;
}

function deleteSelected(req, res, next) {
 getDB((err, db) => {
   if (err) return next(err);
   db.collection('faves')
     .findAndRemove({ _id: ObjectID(req.body.id) }, (removeErr, doc) => {
       if (removeErr) return next(removeErr);
       // return the data
       res.removed = doc;
       db.close();
       return next();
     });
   return false;
 });
 return false;
}

module.exports = { getFavorites, savedRecipes, deleteSelected };
