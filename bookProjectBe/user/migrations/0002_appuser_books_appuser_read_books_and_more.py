# Generated by Django 4.2.7 on 2024-03-27 12:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='books',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='book.book'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='appuser',
            name='read_books',
            field=models.ManyToManyField(related_name='read_books', to='book.book'),
        ),
        migrations.AddField(
            model_name='appuser',
            name='want_to_read',
            field=models.ManyToManyField(related_name='want_to_read', to='book.book'),
        ),
    ]
