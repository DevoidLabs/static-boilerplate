

from sanic import Sanic
from sanic.response import text


app =  Sanic()
app.static('/pages', './pages')


# Blueprints

from blueprints.home.main import home_module

app.blueprint(home_module)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)