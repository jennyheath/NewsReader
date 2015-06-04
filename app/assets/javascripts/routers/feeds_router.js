NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    this.feeds = new NewsReader.Collections.Feeds();
    this.feeds.fetch();
  },

  routes: {
    '': 'index',
    'feeds/:id': 'feedShow'
  },

  index: function () {
    var indexView = new NewsReader.Views.IndexView({
      collection: this.feeds
    });

    this.$rootEl.html(indexView.render().$el);
  },

  feedShow: function (id) {
    var feed = this.feeds.get(id);
    feed.fetch();

    var feedShow = new NewsReader.Views.FeedShow({
      model: this.feeds.get(id)
    });

    this.$rootEl.html(feedShow.render().$el);
  }
});
