const express = require('express');
const router = express.Router();
const userSchema = require('../models/user.models');

/* Añadir */
router.post('/users', (req, res) => {
  const new_user = userSchema(req.body);
  new_user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Listar usuarios */
router.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});
/* Consultar un usuario en especifico */
router.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  userSchema
    .findById(userId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

/* Actualizar */
router.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { user_name, document, pets } = req.body;
  userSchema.updateOne(
    { _id: userId },
    { $set: { user_name, document, pets } }
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      })
  );
});
/* Eliminar */
router.delete('/users/:userId', (req, res) => {
  const { userId } = req.params;
  userSchema
    .deleteOne({ _id: userId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
