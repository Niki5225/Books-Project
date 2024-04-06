from django.shortcuts import render
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.http import HttpResponse
import json



UserModel = get_user_model()


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


@csrf_exempt
def user_register(request):
    if request.method == 'POST':
        
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        email = body['password']
    
        try:
            UserModel.objects.create(username=username, password=password, email=email)
            return JsonResponse({"message": 'success'}, status=200, safe=False)
        except:
            return JsonResponse({"message": 'Error in registrating user'}, status=400, safe=False)
    