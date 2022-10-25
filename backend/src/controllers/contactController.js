import contactModel from '../models/contactModel.js';

export const getAll = (req, res, next) => {
  contactModel
    .findAll()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(next);
};

export const get = async (req, res, next) => {
  const id = req.params.contactId;
  const contact = await contactModel.findByPk(id).catch(next);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).send(`Contact with id ${id} not found!`);
  }
};

export const create = (req, res, next) => {
  contactModel
    .create(req.body)
    .then(c => res.json(c))
    .catch(next);
  res.status(200).send('Contact created successfully');
};

export const update = (req, res, next) => {
  const newContact = req.body;
  const id = req.params.contactId;
  contactModel
    .findByPk(id)
    .then(async contact => {
      if (contact) {
        await contactModel.update(newContact, { where: { id } });
        res.status(200).send('Contact updated');
      } else {
        res.status(404).send(`Contact with id ${id} not found!`);
      }
    })
    .catch(next);
};

export const deleteContact = (req, res, next) => {
  const id = req.params.contactId;
  contactModel
    .destroy({ where: { id } })
    .then(res.status(200).send('Contact deleted'))
    .catch(next);
};
