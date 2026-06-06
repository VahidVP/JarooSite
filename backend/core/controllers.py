from ninja_extra import api_controller, http_get, http_post
from django.utils.text import slugify
from games.models import Game
from games.schemas import GameOut, GameCreate

@api_controller('/games', tags=['Games'])
class GameController:
    
    @http_get('/list', response=list[GameOut])
    def get_games(self):
        return Game.objects.all()

    @http_post('/create', response=GameOut)
    def create_game(self, payload: GameCreate):
        
        data = payload.dict()
        
        data['slug'] = slugify(data['title'])
        
        new_game = Game.objects.create(**data)
        
        return new_game