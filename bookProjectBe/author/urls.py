from django.urls import path
from .views import get_all_authors, get_author_books

urlpatterns = [
    path('all-authors/', get_all_authors),
    path('<str:authorName>/', get_author_books),
]
