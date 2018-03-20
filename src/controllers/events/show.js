EventsShowCtrl.$inject = ['Event', 'User', '$state', '$cookies'];
function EventsShowCtrl(Event, User, $state, $cookies) {
  const vm = this;
  this.event = {};
  this.currentUser = $cookies.get('userId');
  this.comment = {
    user: this.currentUser,
    subject: $state.params.id
  };

  Event.findById($state.params.id)
    .then(event => this.event = event.data);

  function remove() {
    Event.remove(vm.event)
      .then(() => $state.go('eventsIndex'));
  }

  this.remove = remove;

  function submitComment() {
    Event.findById(vm.event._id)
      .then(event => {
        event.data.comments.push(vm.comment);
        Event.update(event.data);
      })
      .then(() => User.findById(vm.currentUser))
      .then(user => {
        console.log(user.data);
        user.data.comments.push(vm.comment);
        User.update(user.data);
      })
      .then(() => $state.go($state.current, {}, {reload: true}));

  }

  this.submitComment = submitComment;

  function addFavoriteEvent() {
    User.findById(vm.currentUser)
      .then(user => {
        user.data.favoriteEvents.push($state.params.id);
        User.update(user.data);
      });
  }

  this.addFavoriteEvent = addFavoriteEvent;

  function isAsteroid() {
    if(vm.event.type === 'Asteroid') {
      return true;
    }
  }

  this.isAsteroid = isAsteroid;

  function isSatellite() {
    if(vm.event.type === 'Satellite') {
      return true;
    }
  }

  this.isSatellite = isSatellite;

}

export default EventsShowCtrl;
