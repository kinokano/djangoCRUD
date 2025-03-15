from django.shortcuts import render, redirect
from api.models import *


def home(request):
    if not request.user.is_authenticated:
        return redirect('login')

    user = CustomUser.objects.all()
    return render(request, 'home.html', {'usuarios': user})

def criarAluno(request):
    return render(request, 'criarAluno.html')

def login(request):
    return render(request, 'login.html')

def cadastro(request, id=None):
    if id:
        usuario = CustomUser.objects.filter(id=id).first()

        if usuario:
            return render(request, "cadastro.html", {"aluno": usuario})
        
        else:
            return redirect('cadastro')

    return render(request, 'cadastro.html')