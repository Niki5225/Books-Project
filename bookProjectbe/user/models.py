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
    
    books = models.ForeignKey('book.Book', on_delete=models.CASCADE)
    
    read_books = models.ManyToManyField('book.Book', related_name='read_books')
    
    want_to_read = models.ManyToManyField('book.Book', related_name='want_to_read')
    
