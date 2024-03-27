from django.db import models
from django.core.validators import MinLengthValidator
from book.models import Book


class Author(models.Model):
    authorName = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(5),
        ],
        null=False,
        blank=False,
    )
    
    books = models.ManyToManyField('book.Book', related_name='author_books')