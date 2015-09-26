import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    save:function(model){
      var self = this;
      model.save().then(function(){
        //alert('saved......' + "title: " + model.get('title'))

        self.transitionTo('tester.comments')
      })
    }
  }
});
