import web

class datos:
    def GET(self):
        render = web.template.render("templates")
        return render.alumnos()
