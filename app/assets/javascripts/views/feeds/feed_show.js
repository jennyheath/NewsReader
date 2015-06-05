NewsReader.Views.FeedShow = Backbone.View.extend({
  events: {
    'click': 'toggleEntries'
  },

  template: JST['feeds/feed_show'],
  entriesListTemplate: JST['entries/index'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.open = false;
  },

  render: function () {
    var content = this.template({
      entries: this.model.entries(),
      feed: this.model
    });
    this.$el.html(content);
    this.renderEntriesIfOpen();
    return this;
  },

  hideEntries: function () {
    this.$('.entries').empty();
  },

  renderEntriesIfOpen: function () {
    if (this.open) { this.showEntries(); }
  },

  showEntries: function () {
    var entriesList = this.entriesListTemplate({ entries: this.model.entries() });
    this.$('.entries').html(entriesList);
  },

  toggleEntries: function () {
    if (this.open) {
      this.hideEntries();
      this.open = false;
    } else {
      this.model.fetch();
      this.showEntries();
      this.open = true;
    }
  }
});
