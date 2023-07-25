module.exports = {
    apps: [{
      name: 'gb-backend-8000',
      script: 'python',
      args: ['manage.py', 'runserver', '0.0.0.0:8000'],
      watch: true,
      ignore_watch: ['node_modules', 'staticfiles'],
      env: {
        PYTHONUNBUFFERED: 1,
        DJANGO_SETTINGS_MODULE: 'core.settings'
      }
    }]
  }
  
