from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, help_text="URL-friendly version of the title (e.g., duck-til-dun)")
    genre = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    release_date = models.DateField(null=True, blank=True)
    status = models.CharField(
        max_length=50, 
        choices=[('In Development', 'In Development'), ('Released', 'Released')],
        default='In Development'
    )
    cover_image_url = models.CharField(
        max_length=500, 
        blank=True, 
        help_text="Relative path (e.g., /games/image.png) or full URL to game poster"
    )
    # This is like overriding the ToString() method in C#
    def __str__(self):
        return self.title