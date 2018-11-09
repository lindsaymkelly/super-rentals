import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },

  actions: {
    saveRental() {
      const updatedTitle = this.get('newRentalTitle')
      const updatedOwner = this.get('newRentalOwner')
      const updatedCity = this.get('newRentalCity')
      const updatedCategory = this.get('newRentalCategory')
      const updatedImage = this.get('newRentalImage')
      const updatedBedrooms = this.get('newRentalBedrooms')
      const updatedDescription = this.get('newRentalDescription')

      const editedRental = this.controller.get('model');

      editedRental.set('title', updatedTitle)
      editedRental.set('owner', updatedOwner)
      editedRental.set('city', updatedCity)
      editedRental.set('category', updatedCategory)
      editedRental.set('image', updatedImage)
      editedRental.set('bedrooms', updatedBedrooms)
      editedRental.set('description', updatedDescription)

      editedRental.save().then(() => this.transitionTo('rentals'))
    }

  }
});