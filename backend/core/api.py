from ninja_extra import NinjaExtraAPI
from .controllers import GameController

api = NinjaExtraAPI(title="Jaroo Studio API", version="1.0.0")

api.register_controllers(GameController)