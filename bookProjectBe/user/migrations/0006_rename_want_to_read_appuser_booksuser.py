# Generated by Django 4.2.7 on 2024-03-28 13:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_remove_appuser_read_books_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appuser',
            old_name='want_to_read',
            new_name='booksUser',
        ),
    ]
