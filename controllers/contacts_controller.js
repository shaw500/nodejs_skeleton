var contactsService = require('../services/contacts_service');

module.exports = {
  viewAll: function(req, res) {
    var contacts = contactsService.getAll();
    res.json(contacts);
  },

  view: function(req, res) {
    var contact = contactsService.get(req.params.contactId);
    res.json(contact);
  },

  save: function(req, res) {
    throw "Contact save not yet implemented."
  }
}
