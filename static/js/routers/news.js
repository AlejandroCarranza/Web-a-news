WebANews.NewsRouter = Backbone.Router.extend({
    routes:{
        "":"index",
        "news/:id": "news"
    },
    initialize: function(){
        this.jsonData = {},
        this.newsCollection = new WebANews.Collections.News();
        this.newsView = new WebANews.Views.News({collection : this.newsCollection });

        Backbone.history.start();
    },
    index: function(){
        console.log("Estoy en el index");
        //Cargamos  toda la informacion que los de backend nos dan
        //Insertamos los datos en la coleccion generando su respectivo model

        this.loadData();
    },
    news : function(id){
        self = this;
        console.log("Consultando la noticia: "+id);
        $(".noticia").remove();
            $.getJSON("allformated.json").then(function(data){
            self.jsonData = data;
            console.log(data);
        var fullNew = new WebANews.Views.ContentNotice({
            model: new WebANews.Models.News({
                id:id,
                title: data[id].title,
                content: data[id].content,
                summary: data[id].summary,
                image: data[id].image,
                author : data[id].author,
                date: data[id].date
            })
        });

        fullNew.render();
        $(".noticias").append(fullNew.el);
            });
    },

    loadData:function(){
        var self = this;

        return $.getJSON("allformated.json").then(function(data){
            self.jsonData = data;

            for (var id in data){
                if (data.hasOwnProperty(id)){
                    self.addNews(id, data[id])
                }
            }
        });

    },

    addNews: function(id, news){
        this.newsCollection.add(new WebANews.Models.News({
            id : id,
            title: news.title,
            summary: news.summary,
            content: news.content,
            image: news.image,
            author: news.author,
            date: news.date
        }));
    }
});

WebANews.application = new WebANews.NewsRouter();
