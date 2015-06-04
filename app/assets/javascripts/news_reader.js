window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    // NewsReader.feeds = new NewsReader.Collections.Feeds();
    // NewsReader.feeds.fetch();

    // var indexView = new NewsReader.Views.IndexView({
    //   collection: NewsReader.feeds
    // });
    // $('#content').html(indexView.render().$el);

    new NewsReader.Routers.Router({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
