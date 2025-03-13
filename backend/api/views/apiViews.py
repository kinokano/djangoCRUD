from rest_framework import viewsets, status
from api.models import *
from api.serializers import *
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class User(APIView):
    def get(self, request, id=None):
        if id:
            usuario = get_object_or_404(CustomUser, pk=id)
            serializer = UserSerializer(usuario)
            return Response(serializer.data, status= status.HTTP_200_OK)

        usuario = CustomUser.objects.all()
        serializer = UserSerializer(usuario, many=True)
        return Response(serializer.data, status= status.HTTP_200_OK)

    def post(self):
        pass


    def put(self):
        pass


    def delete(self, request, id):
        pass

class Login(APIView):
    def post(self, request):
        nome = request.data.get('nome')
        senha = request.data.get('senha')

        usuario = authenticate(username=nome, password=senha)

        if(usuario):
            login(request, usuario)
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({"mensagem": "Usuario nao encontrado!", "status": status.HTTP_401_UNAUTHORIZED})