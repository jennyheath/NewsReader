NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;

    this.feeds = new NewsReader.Collections.Feeds();
  },

  routes: {
    '': 'index',
    'feeds/:id': 'feedShow'
  },

  index: function () {
    this.feeds.fetch({ reset: true });
    var indexView = new NewsReader.Views.IndexView({
      collection: this.feeds
    });

    this.$rootEl.html(indexView.render().$el);
  },

  feedShow: function (id) {
    var feed = this.feeds.getOrFetch(id);

    var feedShow = new NewsReader.Views.FeedShow({
      model: feed
    });

    this.$rootEl.html(feedShow.render().$el);
  }
});
