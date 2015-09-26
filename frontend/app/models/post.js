import DS from 'ember-data';

const Post = DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  comments:DS.hasMany('comment',{async:true}),
  CPcomments:function(){
    var comments = this.get('comments');
    return comments.get('length');
  }.property('comments')
});

export default Post;
