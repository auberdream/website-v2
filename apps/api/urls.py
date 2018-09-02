from django.conf.urls import url
from rest_framework.generics import ListAPIView
from wagtail.wagtailimages.models import Image

from .views import SiteData


urlpatterns = [
    url(
        r'^site/$', SiteData.as_view()
    ),
]
