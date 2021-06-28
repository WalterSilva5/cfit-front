from app.models import User
from rest_framework import serializers
from django.contrib.auth.hashers import make_password


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'is_superuser', 'pk', 'is_active', 'password']
    def validate_password(self, value):
        return make_password(value)
