import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRental() {
      let newRentalTitle = this.get('newRentalTitle')
      let newRentalOwner = this.get('newRentalOwner')
      let newRentalCity = this.get('newRentalCity')
      let newRentalCategory = this.get('newRentalCategory')
      let newRentalImage = this.get('newRentalImage')
      let newRentalBedrooms = this.get('newRentalBedrooms')
      let newRentalDescription = this.get('newRentalDescription')

      let newRecord = this.store.createRecord('rental', {
        title: newRentalTitle,
        owner: newRentalOwner,
        city: newRentalCity,
        category: newRentalCategory,
        image: newRentalImage,
        bedrooms: newRentalBedrooms,
        description: newRentalDescription

      })
      newRecord.save()
    },
    updateRental() {
      let updatedTitle = this.get('updatedTitle')
      let rental = this.get('model').findBy('id', '1')
      rental.set('title', updatedTitle)
      rental.save()
    },
    destroyRental() {
      let destroyId = this.get('destroyId')
      let rental = this.get('model').findBy('id', destroyId)
      rental.destroyRecord()
    }
  }
});
