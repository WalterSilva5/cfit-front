from app.serializers.VideoSerializer import VideoSerializer
from app.serializers.PlaylistSerializer import PlaylistSerializer
from app.serializers.UserSerializer import UserSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action, permission_classes
from app.models import Video, Playlist, User
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework_jwt.settings import api_settings
from rest_framework import permissions
from rest_framework.views import APIView

# Create your views here.


class RotaDeTeste(APIView):
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

    def post(self, request):
        return Response("teste ok")


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    @action(detail=False, methods=['get'])
    def get_video(self, request, pk=None):
        permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        videos = self.queryset
        serializer = VideoSerializer(videos, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def create_video(self, request, pk=None):
        video = self.get_object()
        serializer = VideoSerializer(video, many=True)
        return Response(serializer.data)


class PlaylistViewSet(viewsets.ModelViewSet):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()
    permission_classes = [permissions.IsAuthenticated]





    @action(detail=False, methods=['post'])
    def create_user(self, request):
        print(request.POST)
        return Response('ok')


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['post'])
    def create_user(self, request):
        print(request.POST)
        return Response('ok')

    # @action(detail=True, methods=['post'])
    # def update_user(self, request, pk=None):

    @action(detail=True, methods=['delete'])
    def delete_user(self, request, pk=None):
        if(User.objects.get(pk=pk).delete()):
            return Response("ok")
        else:
            return Response("erro")
