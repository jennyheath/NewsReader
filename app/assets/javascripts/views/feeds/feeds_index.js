NewsReader.Views.IndexView = Backbone.View.extend ({
  template: JST['feeds/index'],

  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      feeds: this.collection
    });
    this.$el.html(content);
    return this;
  }

});
