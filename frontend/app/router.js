import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route("about");

  this.route("login");
  this.route("signup");

  this.route("posts", function() {
    this.route("show", {
      path: ":post_id"
    });
  });

  this.route("admin", function() {
    this.route("posts", function() {
      this.route("new");
      this.route("edit", {
        path: ":post_id/edit"
      });
    });
  });

  this.route("comments", function() {
    this.route("new");
    this.route("edit", {
      path: ":comment_id/edit"
    });
    this.route("show", {
      path: ":comment_id"
    });
  });

  this.route("tester",function(){
    this.route('posts',function(){
      //sideby side list and clicked
      this.route('newpost');
      this.route('editpost',{path:'/edit/:post_id'});
      this.route('deletepost');
      this.route('post',function(){

        //each with an outlet to show comments
        this.route('comments')
      });
      this.route('viewpost', {path:'/view/:post_id'}, function() {
        this.route('newcomment');
      });
    });

      this.route('comments',function(){
          //sideby side list and clicked
          this.route('newcomment')
          this.route('editcomment',{path:'/edit/:comment_id'})
          this.route('deletecomment')
          this.route('comment',function(){
            //each with an outlet to show comments
            this.route('comments')
          })
        });

  });
});
