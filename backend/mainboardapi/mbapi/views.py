from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import SensorsSerializer, SensorTypeSerializer, MainBoardSerializer, SensorValueSerializer
from .models import MainBoard, SensorType, Sensors, SensorValue
from rest_framework import permissions
from rest_framework import status
from knox.auth import TokenAuthentication
from rest_framework.renderers import JSONRenderer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from django.contrib.auth import get_user_model
User = get_user_model()


class RegisterSensor(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Sensors.objects.all()
    serializer_class = SensorTypeSerializer


class PutSensorValue(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = SensorValue.objects.all()
    serializer_class = SensorValueSerializer
# register a main board which is related to the user you just created
# it is a front end concern so you don't need to worry about procedure


class RegisterMainboardAPI(generics.GenericAPIView):
    # permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]
    serializer_class = MainBoardSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        mainboard = serializer.save()
        print(mainboard)
        return Response({
            "id": mainboard.id,
            "identifier": mainboard.unique_id
        })


class MainboardList(generics.ListAPIView):
    # permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]

    queryset = MainBoard.objects.all()
    serializer_class = MainBoardSerializer


class RegisterSensorType(generics.ListCreateAPIView):
    # permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]
    queryset = SensorType.objects.all()
    serializer_class = SensorTypeSerializer


class SensorTypeList(generics.ListAPIView):
    # permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticated]
    queryset = SensorType.objects.all()
    serializer_class = SensorTypeSerializer


class GetSensorList(generics.ListAPIView):
    # permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    queryset = Sensors.objects.all()
    serializer_class = SensorsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['mainboard_id']


class GetSensorValues(generics.ListAPIView):
    # permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    queryset = SensorValue.objects.all()
    serializer_class = SensorValueSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['mainboard_id', 'sensor_id']
