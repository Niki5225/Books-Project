from django.http import JsonResponse
from .models import Book
from django.core.serializers import serialize
import json

def get_all_books(request):
    books = Book.objects.all()
    data = parseJSON(books)
    
    return JsonResponse({'books': data}, safe=False)


def parseJSON(books):
    bookInfo = {}
    for book in books:
        bookObj = {'nameOfTheBook': book.nameOfTheBook,
                   'img': book.img,
                   'author': book.author.authorName,
                   'user': book.user.username}
        bookInfo[book.pk] = (bookObj)
    return bookInfo