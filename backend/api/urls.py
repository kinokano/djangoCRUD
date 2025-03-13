from django.urls import path, include

from api.views.apiViews import *
from api.views.webViews import *


urlpatterns = [
    path('api/user/', User.as_view(), name='usuarios'),
    path('api/user/<int:id>', User.as_view(), name="usuarioDetalhe"),
    path('api/login/', Login.as_view(), name='loginAPI'),
    path('home/', home, name="home"),
    path('criarAluno/', criarAluno, name="criarAluno"),
    path('login/', login, name='login'),
    
]