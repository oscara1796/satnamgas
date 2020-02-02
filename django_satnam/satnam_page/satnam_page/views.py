
from django.http import HttpResponse
from django.http import JsonResponse

# -Utilities
from datetime import datetime
import json


def Datetime(request):

    now = datetime.now().strftime('%b %dth, %Y - %H:%M hrs')
    return HttpResponse("Oh, hi! Current time is {}".format(now))


def sorted(request):

    numbers = request.GET['numbers']
    list = [int(x) for x in numbers.split(',')]
    list.sort()
    data = {
        'status': 'ok',
        'numbers': list,
        'message': ' Integers sorted succesfully'
    }
    return JsonResponse(data, safe= False)

def say_hi(request, name, age):
    """return a greeting"""
    if age < 12:
         message = 'Sorry {}, you are not  allowed here'.format(name)

    else:
        message = 'Hello, {}! Welcome to Platzigram'.format(name)

    return HttpResponse(message)

    
