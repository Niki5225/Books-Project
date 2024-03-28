from django.db import models
from django.core.validators import MinLengthValidator


class Author(models.Model):
    authorName = models.CharField(
        max_length=50,
        validators=[
            MinLengthValidator(5),
        ],
        null=False,
        blank=False,
    )
    
    img = models.URLField(
        null = False,
        blank = False,
    )
    
    def __str__(self):
        return self.authorName
    