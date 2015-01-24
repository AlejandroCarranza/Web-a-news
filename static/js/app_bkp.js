var WebANews={};
WebANews.NewsModel = Backbone.Model.extend({});

WebANews.NewsView = Backbone.View.extend({
    tagName : "article",
    className : "noticia",
    template : Handlebars.compile($("#tplNews").html()),
    render : function(){
        //var news = this.model;
        //var title = news.get("title");
        //var image = news.get("image");
        //var date = news.get("date");
        //var content = news.get("content");
        //var author = news.get("author");

        //this.$el.html("<h3 class='titulo'>"+title+"</h3>"+
        //             "<figure><img src='"+image+"'>"+
        //             "<figcaption>"+date+"</figcaptio>"+
        //             "</figure><div class='contenido'>"+
        //             content+"</div><p class='autor'>"+
        //    author+"</p><a class='leermas'>Leer mas</a>");
        this.$el.html(this.template(this.model.toJSON()));
    }
});

WebANews.NewsCollection = Backbone.Collection.extend({
    model:WebANews.NewsModel
});

WebANews.NewsRouter = Backbone.Router.extend({
    routes: {
        "" : "index",
        "news/:id" : "noticia",
        "profile/:username" : "profile"
    },
    index : function(){
        console.log("Estás en el index");
    },
    noticia: function(id){
        console.log("Quieres ver la noticia: "+id);
    },
    profile: function(username){
        console.log("Viendo el perfil de: "+username);
    }
});

WebANews.application = new WebANews.NewsRouter();
Backbone.history.start();

window.WebANews = WebANews;
