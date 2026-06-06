from django.contrib import admin
from .models import Game

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'genre', 'status', 'release_date')
    prepopulated_fields = {'slug': ('title',)}