import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('rental');
  }

  // actions: {
  //   deleteRental(rental) {
  //     let confirmation = confirm('Are you sure you want to delete this property?');

  //     if (confirmation) {
  //       rental.destroyRecord();
  //     }
  //   }
  // }
});
