from .views import get_all_books
from django.urls import path

urlpatterns = [
    path('all-books', get_all_books),
]
