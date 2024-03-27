from user.views import index_view, send_email_func
from django.urls import path

urlpatterns = [
    path('', index_view),
    path('send-email/', send_email_func),
]
