from user.views import send_email_func
from django.urls import path

urlpatterns = [
    path('send-email/', send_email_func),
    # path('login/', login_view),
    # path('logout/', logout_view),
]
