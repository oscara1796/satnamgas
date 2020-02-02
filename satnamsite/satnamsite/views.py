# Satnam views
from django.http import HttpResponse

# utilities
from datetime import datetime

def hello_world(request):
    now = datetime.now().strftime('%b %dth, %Y - %H:%M hrs')
    return HttpResponse("Oh hi, current server time is: {now}".format(now= now)
