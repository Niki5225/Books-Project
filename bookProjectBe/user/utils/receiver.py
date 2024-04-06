from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token
from django.dispatch import receiver



UserModel = get_user_model()

@receiver(post_save, sender=UserModel)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
