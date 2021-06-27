from django.contrib.auth.models import User, Group
from rest_framework import serializers
from app.models import Playlist

class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Playlist
    fields = ['titulo', 'pk']


