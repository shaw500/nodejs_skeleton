var _ = require('underscore');

var contacts = [{
  id: 'mjshaw',
  name: 'Matthew Shaw',
  email: 'shaw500@gmail.com'
}, {
  id: 'taffanyl',
  name: 'Taffany Leung',
  email: 'taffanyl@gmail.com'
}];

module.exports = {

  getAll: function() {
    return contacts;
  },

  get: function(contactId) {
    var contact = _.find(contacts, function(contact) {
      return contact.id == contactId;
    });
    if (!contact) throw 'Contact does not exist with id: ' + contactId;
    return contact;
  }
}
