WebANews.Views.News = Backbone.View.extend({
    el: $(".noticias"),
    template: Handlebars.compile($("#tplNews").html()),
    render:function(){
        this.collection.forEach(this.addOneNews, this);
    },

    initialize: function(){
        console.log(this.collection);
        this.listenTo(this.collection, "add", this.addOneNews, this);
    },

    addOneNews: function(news){
       this.$el.append()
        var newsView = new WebANews.Views.SingleNews({
                        model:news, el:this.$el});
        newsView.render();
        this.$el.append(newsView.el);
    }
});
