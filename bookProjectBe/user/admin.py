from django.contrib import admin
from book.models import Book
from author.models import Author
from django.contrib.auth import get_user_model

UserModel = get_user_model()

# Register your models here.
admin.site.register(Book)
admin.site.register(UserModel)
admin.site.register(Author)