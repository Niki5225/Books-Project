from django.shortcuts import render
from author.models import Author
from django.http import JsonResponse

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