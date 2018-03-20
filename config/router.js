const router = require('express').Router();

const events = require('../controllers/events');
const places = require('../controllers/places');
const users = require('../controllers/users');

// const secureRoute = require('../lib/secureRoute');
const auth = require('../controllers/auth');


router.route('/events')
  .get(events.index)
  .post(events.create);

router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete);


router.route('/places')
  .get(places.index)
  .post(places.create);

router.route('/places/:id')
  .get(places.show)
  .put(places.update)
  .delete(places.delete);


router.post('/register', auth.register);

router.post('/login', auth.login);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
