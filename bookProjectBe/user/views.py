from django.shortcuts import render
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.core.serializers import serialize

UserModel = get_user_model()


def index_view(request):
    return render(request, 'index.html')


@csrf_exempt
def send_email_func(request):
    subject = 'A new book has been submitted'
    message = 'Hello'
    email_from = 'nikolayradkov36@gmail.com'
    recipient_list = ['nikolayradkov97.im@gmail.com']

    if not subject or not message:
        print('required message and subject')

    try:
        send_mail(subject, message, email_from, recipient_list)
        print("success")
    except Exception as e:
        print('error:', str(e))

    return render(request, 'index.html')

def get_all_users(request):
    users = UserModel.objects.all()
    jsonUsers = serialize('json', users)
    return JsonResponse({'users': jsonUsers})