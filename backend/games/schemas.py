from ninja import ModelSchema, Schema
from pydantic import Field
from .models import Game

class GameOut(ModelSchema):
    class Meta:
        model = Game
        fields = [
            'id', 'title', 'slug', 'genre', 
            'status', 'description', 'cover_image_url'
        ]

class GameCreate(Schema):
    title: str = Field(..., max_length=200, example="Cyber Ninja 2088")
    genre: str = Field(..., max_length=100, example="Action RPG")
    description: str = Field(default="", example="A dark neon adventure.")
