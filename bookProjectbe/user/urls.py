from user.views import index_view, send_email_func, get_all_users
from django.urls import path

urlpatterns = [
    path('', index_view),
    path('send-email/', send_email_func),
    path('all-users/', get_all_users)
]
