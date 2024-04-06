from user.views import send_email_func, RegisterView, LoginView
from django.urls import path
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('send-email/', send_email_func),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
