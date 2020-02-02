
from django.contrib import admin
from django.urls import path
from satnamsite import views


urlpatterns = [
    path('hello-world/', views.hello_world),
]
