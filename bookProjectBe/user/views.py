from django.shortcuts import render
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.http import HttpResponse
import json
from rest_framework.views import APIView
from .serializers import UserSerialzer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime



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
    
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerialzer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
class LoginView(APIView):
    def post(self, request):
        password = request.data['password']
        username = request.data['username']
        
        user = UserModel.objects.filter(username=username).get()
        
        if user is None:
            raise AuthenticationFailed("User not found !")
        
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect password !")
        
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow(),
        }
        
        token = jwt.encode(payload, "secret", algorithm="HS256")
        
        response =  Response({
            "jwt": token,
        })
        
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            "jwt": token,
            
        }
        
        return response