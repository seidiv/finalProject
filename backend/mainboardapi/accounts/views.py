from .serializers import RegisterMainboardSerializer, UserSerializer, LoginSerializer
from knox.models import AuthToken
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
User = get_user_model()
# Register API


class RegisterMainboardUserAPI(generics.GenericAPIView):
    # permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]
    serializer_class = RegisterMainboardSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        print(serializer)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        # print(request.data)
        # user = User.objects.get(username=request.data['username'])
        # print(user)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })

# Get User API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated, permissions.IsAdminUser
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
