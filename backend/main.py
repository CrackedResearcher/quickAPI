from fastapi import FastAPI

app = FastAPI()

class RouteManager:
    routes = []

    @classmethod
    def register(cls, path, func_name, methods):
        cls.routes.append((path, func_name, methods))

    @classmethod
    def apply_routes(cls, app):
        for path, func_name, methods in cls.routes:
            app.add_api_route(path, globals()[func_name], methods=methods)


RouteManager.register("/", "home_page", ["GET"])


def home_page():
    return {"message": "Welcome test success!"}


RouteManager.apply_routes(app)