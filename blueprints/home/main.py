
from sanic import Blueprint

# Global helpers
from global_helpers.templates import set_templates_env, render_template


home_module = Blueprint('home_module')
env = set_templates_env(filename="main", templates_dir="/pages/home/templates")


@home_module.route('/')
async def homepage(request):
    return render_template(env=env, filename="home")

    
