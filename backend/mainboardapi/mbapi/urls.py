from django.urls import path
from .views import RegisterMainboardAPI, RegisterSensorType, GetSensorValues, RegisterSensor

urlpatterns = [
    path('api/mainboard/register', RegisterMainboardAPI.as_view()),
    path('api/sensors/registersensortypes', RegisterSensorType.as_view()),
    path('api/sensors/registersensortypes/<int:pk>',RegisterSensorType.as_view()),
    path('api/sensors/value', GetSensorValues.as_view()),
    path('api/sensors/registersensor', RegisterSensor.as_view()),
]
