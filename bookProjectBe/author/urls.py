from django.urls import path
from .views import get_all_authors

urlpatterns = [
    path('all-authors', get_all_authors),
    
]
