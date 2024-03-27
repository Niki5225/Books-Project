from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.

class Author:
    authorName = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(5),
        ],
        null=False,
        blank=False,
    )
    
    books = models.ManyToManyField('book.Book')