import Controller from '@ember/controller';

export default Controller.extend({
  responseMessage: '',

  actions: {
    createRental() {
      const newRentalTitle = this.get('newRentalTitle')
      const newRentalOwner = this.get('newRentalOwner')
      const newRentalCity = this.get('newRentalCity')
      const newRentalCategory = this.get('newRentalCategory')
      const newRentalImage = this.get('newRentalImage')
      const newRentalBedrooms = this.get('newRentalBedrooms')
      const newRentalDescription = this.get('newRentalDescription')

      const newRecord = this.store.createRecord('rental', {
        title: newRentalTitle,
        owner: newRentalOwner,
        city: newRentalCity,
        category: newRentalCategory,
        image: newRentalImage,
        bedrooms: newRentalBedrooms,
        description: newRentalDescription

      })
      newRecord.save().then(response => {
        this.set('responseMessage', 'Thank you! Your new property has been added.');
      });
    }

  }
});
