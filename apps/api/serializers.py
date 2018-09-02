import copy
from rest_framework import serializers
from wagtail.wagtailcore.templatetags.wagtailcore_tags import RichText
from wagtail.wagtailimages.models import Image

from home.models import HomePage


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = ('__all__')


class SiteDataSerializer(serializers.Serializer):
    home_page = HomePageSerializer()
