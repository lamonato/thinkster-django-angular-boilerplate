from django.conf.urls import patterns, url

from thinkster_django_angular_boilerplate.views import IndexView

urlpatterns = patterns(
    '',

    # ... URLs
    url(r'^api/v1/', include(router.urls)),

    url('^.*$', IndexView.as_view(), name='index'),
)
