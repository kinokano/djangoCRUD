from django.urls import path, include

from api.views.apiViews import *
from api.views.webViews import *


urlpatterns = [
    path('api/user/', User.as_view(), name='usuarios'),
    path('api/user/<int:id>', User.as_view(), name="usuarioDetalhe"),
    path('api/login/', Login.as_view(), name='loginAPI'),
    path('api/GetDadosUsuarioLogado', GetDadosUsuarioLogado.as_view(), name='GetDadosUsuarioLogado'),
    path('home/', home, name="home"),
    path('login/', login, name='login'),
    path('cadastro/', cadastro, name='cadastro'),
    path('cadastro/<int:id>', cadastro, name='cadastroEdicao'),

]