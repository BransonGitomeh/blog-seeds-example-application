import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.query('post',{sort: 'id ASC',limit: 5});
  },

  actions:{
    destroy:function(post){
      console.log('are you sure you want to destroy ' + post.get('title'))
      post.destroyRecord();
    }
  }
})
