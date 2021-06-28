from django.contrib.auth.models import User, Group
from rest_framework import serializers
from app.models import Video

class VideoSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Video
    fields = ['titulo', 'playlist_id', 'pk']


