# Generated by Django 4.2.7 on 2024-03-28 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0003_book_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='img',
            field=models.URLField(),
        ),
    ]
