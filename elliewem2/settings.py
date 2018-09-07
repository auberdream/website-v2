"""
Django settings for elliewem2 project
"""

from __future__ import absolute_import, unicode_literals

import os
import sys
import urlparse

# import dj_database_url


# project
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# project/project
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# project/project/apps/
APP_PATH = os.path.join(BASE_DIR, 'apps')

sys.path.insert(0, os.path.join(APP_PATH))


# Environment

SECRET_KEY = os.environ['SUPER_SECRET_KEY']

DEBUG = str(os.environ.get('DEBUG', False)).lower() == 'true'

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Application definition

INSTALLED_APPS = [
    'home',
    'about',

    'wagtail.wagtailforms',
    'wagtail.wagtailredirects',
    'wagtail.wagtailembeds',
    'wagtail.wagtailsites',
    'wagtail.wagtailusers',
    'wagtail.wagtailsnippets',
    'wagtail.wagtaildocs',
    'wagtail.wagtailimages',
    'wagtail.wagtailsearch',
    'wagtail.wagtailadmin',
    'wagtail.wagtailcore',

    'modelcluster',
    'taggit',
    'rest_framework',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sitemaps',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'django.contrib.sites',
]

MIDDLEWARE = [
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'wagtail.wagtailcore.middleware.SiteMiddleware',
    'wagtail.wagtailredirects.middleware.RedirectMiddleware',
]

ROOT_URLCONF = 'elliewem2.urls'

WSGI_APPLICATION = 'elliewem2.wsgi.application'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(PROJECT_ROOT, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

# I18N

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True


# Static and Media

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

STATICFILES_DIRS = [
    os.path.join(PROJECT_ROOT, 'static'),
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

if DEBUG:
    STATIC_URL = '/static/'
    MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
    MEDIA_URL = '/media/'
else:
    STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
    STATIC_HOST = os.environ.get('DJANGO_STATIC_HOST', '')
    STATIC_URL = STATIC_HOST + '/static/'


# Django Debug Toolbar

SHOW_DDT = os.environ.get('SHOW_DDT', False)

if SHOW_DDT:
    INSTALLED_APPS.append('debug_toolbar')
    MIDDLEWARE.append('debug_toolbar.middleware.DebugToolbarMiddleware')
    INTERNAL_IPS = ('127.0.0.1',)


# Wagtail settings

WAGTAIL_SITE_NAME = "Ellie Wem"

# Base URL to use when referring to full URLs within the Wagtail admin backend -
# e.g. in notification emails. Don't include '/admin' or a trailing slash
if DEBUG:
    BASE_URL = 'http://localhost'
else:
    BASE_URL = os.getenv('BASE_URL')

SITE_ID = 1


# Access and security

if not DEBUG:
    SECURE_SSL_REDIRECT = True
    HOST_SCHEME = 'http://'
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    CSRF_COOKIE_HTTPONLY = True
    SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

ALLOWED_HOSTS = [
    'elliewem.co.uk',
    'localhost',
]


# Cache

REDIS_URL = os.environ.get('REDIS_URL')

if REDIS_URL:
    parsed_redis_url = urlparse.urlparse(REDIS_URL)
    max_redis_cache_connections = int(os.getenv('REDIS_CACHE_MAX_CONNECTIONS', '20'))

    CACHES = {
        'default': {
            'BACKEND': 'django_redis.cache.RedisCache',
            'LOCATION': 'redis://{0}:{1}/0'.format(
                parsed_redis_url.hostname, parsed_redis_url.port),
            'OPTIONS': {
                'CLIENT_CLASS': 'django_redis.client.DefaultClient',
                'CONNECTION_POOL_KWARGS': {'max_connections': max_redis_cache_connections},
                'PASSWORD': parsed_redis_url.password
            }
        },
        'project': {
            'BACKEND': 'django_redis.cache.RedisCache',
            'LOCATION': 'redis://{0}:{1}/1'.format(
                parsed_redis_url.hostname, parsed_redis_url.port),
            'OPTIONS': {
                'CLIENT_CLASS': 'django_redis.client.DefaultClient',
                'CONNECTION_POOL_KWARGS': {'max_connections': max_redis_cache_connections},
                'PASSWORD': parsed_redis_url.password
            }
        },
    }
else:
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'default'
        },
        'project': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'project'
        },
    }


# Logging

if DEBUG:
    LOGGING = {
        'disable_existing_loggers': False,
        'version': 1,
        'handlers': {
            'console': {
                'class': 'logging.StreamHandler',
                'level': 'DEBUG',
            },
        },
        'loggers': {
            '': {
                'handlers': ['console'],
                'level': os.getenv('DJANGO_LOG_LEVEL', 'INFO'),
            },
            # 'django.db.backends': {
            #     'level': 'DEBUG',
            #     'handlers': ['console'],
            # }
        },
    }
else:
    LOGGING = {
        'version': 1,
        'disable_existing_loggers': False,
        'handlers': {
            'console': {
                'class': 'logging.StreamHandler',
            },
        },
        'loggers': {
            '': {
                'handlers': ['console'],
                'level': os.getenv('DJANGO_LOG_LEVEL', 'WARNING'),
            },
        },
    }
