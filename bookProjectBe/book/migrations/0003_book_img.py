# Generated by Django 4.2.7 on 2024-03-28 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_alter_book_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='img',
            field=models.ImageField(default='', upload_to=''),
            preserve_default=False,
        ),
    ]
