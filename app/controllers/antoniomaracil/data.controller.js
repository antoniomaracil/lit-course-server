const { ObjectID } = require('mongodb');
const { mongoConnect } = require('../../../mongo.config');

exports.updateItem = async (req, res) => {
  const data = req.body;
  const _id = ObjectID(data.id);
  delete data.id;

  const mongo = await mongoConnect();

  if (mongo.client) {
    mongo.collection.updateOne({ _id }, { $set: data }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.getItems = async (req, res) => {
  const mongo = await mongoConnect();

  if (mongo.client) {
    mongo.collection.find().limit(100).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};
