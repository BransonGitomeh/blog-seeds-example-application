import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.query('comment',{sort: 'id ASC',limit: 5});
  }
})
