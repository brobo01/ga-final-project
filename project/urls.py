"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/', include('jwt_auth.urls')),
    path('api/tickets/', include('tickets.urls')),
    path('api/images/', include('images.urls')),
    path('api/categories/', include('categories.urls')),
    path('api/polls/', include('polls.urls')),
    path('api/basket/', include('baskets.urls')),
    path('api/categories/', include('categories.urls')),
    path('api/comments/', include('comments.urls')),
    path('api/talks/', include('talks.urls')),
    path('api/images/', include('images.urls')),
    path('api/votes/', include('votes.urls')),
    re_path(r'^.*$', index) # <-- have this come last using re path.

]
