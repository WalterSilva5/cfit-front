from django.urls import path, include
from rest_framework import routers
from app.views import views
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'video', views.VideoViewSet, basename="video")
router.register(r'user', views.UserViewSet, basename="user")
router.register(r'playlist', views.PlaylistViewSet)
urlpatterns = [
    path('api-v1/', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
]
