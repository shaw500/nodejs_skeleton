var contactsController = require('./controllers/contacts_controller');

var routes = function(app) {
  app.get('/api/contacts', contactsController.viewAll);
  app.post('/api/contact/save', contactsController.save);
  app.get('/api/contact/:contactId', contactsController.view);
}

module.exports = routes;
