import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.createRecord('post');
  },
  actions:{
    save:function(model){
      var self = this;
      model.save().then(function(){
        //alert('saving......' + "content: " + model.get('title'))
        self.transitionTo('tester.posts')

      })
    }
  }
});