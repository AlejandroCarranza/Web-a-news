WebANews.Views.SingleNews = Backbone.View.extend({
    template: Handlebars.compile($("#single-news").html()),
    render:function(){
        this.$el.append(this.template(this.model.toJSON()));
    },
    events: {
        "click .leer_mas": "leer_mas"
    },
    leer_mas : function(e){
        if (e.target.id == this.model.get("id")){
            this.navigate(this.model.get("id"));
            return false;
        }
    },
    navigate : function(id){
        WebANews.application.navigate("news/"+id,{trigger: true});
    }
});
