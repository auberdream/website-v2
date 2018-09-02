# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel
from wagtail.wagtailsearch import index


class HomePage(Page):
    heading = models.CharField(max_length=250)

    content_panels = Page.content_panels + [
        FieldPanel('heading', classname="full")
    ]
