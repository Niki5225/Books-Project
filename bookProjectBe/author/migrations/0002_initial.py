# Generated by Django 4.2.7 on 2024-03-27 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('author', '0001_initial'),
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='books',
            field=models.ManyToManyField(related_name='author_books', to='book.book'),
        ),
    ]
