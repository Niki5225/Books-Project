from django.db import models
from django.core.validators import MinLengthValidator
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    username = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(5),
        ],
        null= False,
        blank=False,
        unique=True
    )
    
    email = models.EmailField(
        unique=True,
        null=False,
        blank=False,
    )
    
    password = models.CharField(
        max_length=16,
        validators=[
            MinLengthValidator(5),
        ],
        null=False,
        blank=False,
    )
    
    booksUser = []
    
