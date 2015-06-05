NewsReader.Views.IndexView = Backbone.View.extend ({
  template: JST['feeds/index'],

  events: {
    'click .feed-list': 'renderEntries'
  },

  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    var view = this;
    // this.$el.empty();
    this.collection.each(function (feed) {
      var feedItemView = new NewsReader.Views.FeedShow({ model: feed });
      view.$el.append(feedItemView.render().$el);
    });
    return this;
  },

  renderEntries: function (event) {
    var id = $(event.target).data('id');
    var feed = this.collection.getOrFetch(id);

    var feedShow = new NewsReader.Views.FeedShow({
      model: feed
    });

    $('.' + id).html(feedShow.render().$el);
  },

  emptyEntries: function (event) {
    var id = $(event.target).data('id');
    $('.' + id).empty();
  }
});

// 1. Make a View specifically for FeedIndexItems
