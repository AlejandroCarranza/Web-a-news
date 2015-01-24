import web
import json
from test import datos

urls = (
    "/", "datos",
    "/database", "base",
    "/insert", "insert",
)
#      \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b.
class Application(web.application):
    def run(self, port=1234, *middleware):
        func = self.wsgifunc(*middleware)
        return web.httpserver.runsimple(func,('0.0.0.0',port))

class base:
    def GET(self):
        db = web.database(dbn="mysql", user="usr_tapw", pw="password", db="tapw")
        select = db.query("select * from alumnos")
        #select = db.select("alumnos", what="id, nombre")
        render = web.template.render("templates")
        return render.alumnos1(select)

class insert:
    #def GET(self):
    def POST(self):
        request = web.input("nombre","apellido","nocontrol")
        db = web.database(dbn="mysql",user="usr_tapw", pw="password",db="tapw")
        db.insert("alumnos",nombre=request.nombre, apellidos=request.apellido, noctrl=request.nocontrol)
        return "insertado"

if __name__ == "__main__":
    app = Application(urls, globals())
    app.run()

