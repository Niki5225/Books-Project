from django.shortcuts import render
from author.models import Author
from django.http import JsonResponse
from book.models import Book

def get_all_authors(request):
    authors = Author.objects.all()
    data = parseJSON(authors)
    
    return JsonResponse({'authors': data}, safe=False)


def parseJSON(authors):
    authorsInfo = {}
    for author in authors:
        authorObj = {'authorName': author.authorName,
                     'img': author.img,
                    }
        authorsInfo[author.pk] = (authorObj)
    return authorsInfo

def get_author_books(request, authorName):
    author = Author.objects.get(authorName=authorName)
    books = Book.objects.filter(author=author)
    booksInfo = {}
    for book in books:
        bookObj = {'nameOfTheBook': book.nameOfTheBook,
                   'img': book.img,
                   'author': book.author.authorName,
                   'user': book.user.username if book.user != None else []}
        booksInfo[book.pk] = bookObj
    return JsonResponse({'books': booksInfo}, safe=False)