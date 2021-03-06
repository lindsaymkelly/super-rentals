import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },

  actions: {
    deleteRental(rental) {
      let confirmation = confirm('Are you sure you want to delete this property?');

      if (confirmation) {
        rental.destroyRecord().then(() => this.transitionTo('rentals'));
      }
    }
  }
});
