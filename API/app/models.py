from django.db import models
from django.contrib.auth.models import User as DjangoUser

# Create your models here.


class Playlist(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=200)

    def __str__(self):
        return self.titulo


class Video(models.Model):
    titulo = models.CharField(max_length=200)
    playlist_id = models.IntegerField(max_length=200)

    def __str__(self):
        return self.titulo

class User(DjangoUser):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __str__(self):
        return self.username
