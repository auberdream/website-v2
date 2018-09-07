# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from wagtail.wagtailcore.models import Page
from wagtail.wagtailcore.fields import RichTextField
from wagtail.wagtailadmin.edit_handlers import FieldPanel
from wagtail.wagtailsearch import index


class ContactPage(Page):
    email = models.CharField(max_length=20, default="")

    content_panels = Page.content_panels + [
        FieldPanel('email', classname="full")
    ]
