from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth import get_user_model
from author.models import Author


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
    
    img = models.URLField(
        null = False, 
        blank=False
    )
    
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    user = models.ForeignKey(UserModel, on_delete=models.CASCADE ,blank=True, null=True)
    
    def __str__(self):
        return self.nameOfTheBook
    