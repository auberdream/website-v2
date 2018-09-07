import copy
from rest_framework import serializers
from wagtail.wagtailcore.templatetags.wagtailcore_tags import RichText
from wagtail.wagtailimages.models import Image

from home.models import HomePage
from about.models import AboutPage


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = ('__all__')

class AboutPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPage
        fields = ('__all__')

class SiteDataSerializer(serializers.Serializer):
    home_page = HomePageSerializer()
    about_page = AboutPageSerializer()
