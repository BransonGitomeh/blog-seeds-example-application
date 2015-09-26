import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return Ember.RSVP.hash({
      comment: this.store.createRecord('comment'),
      post: this.modelFor('tester.posts.viewpost')
    })
  },

  actions:{
    save:function(post, comment){
      console.log('saving ' + comment.get('body') +' to ' + post.get('title'))
      comment.set('post',post);

      var self = this;
      comment.save().then(function(){
        console.log('saved ' + comment.get('body') +' to ' + post.get('title'))
        self.transitionTo('tester.posts.viewpost')
      })
    }
  }
});
