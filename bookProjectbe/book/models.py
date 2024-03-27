from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth import get_user_model


UserModel = get_user_model()

class Book(models.Model):
    nameOfTheBook = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(3),
        ],
        null=False,
        blank=False,
    )
    
    users = models.ManyToManyField(UserModel, related_name='user_books')
    
    author = models.ForeignKey('author.Author', on_delete=models.CASCADE)