Package.describe({
  git: 'https://github.com/perfdog1/meteor-collection-timestampable.git',
  name: 'perfdog1:collection-timestampable',
  summary: 'Add timestamps to collections',
  version: '3.1.12'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');

  api.use([
    'check@1.4.0',
    'coffeescript@2.0.0',
    'underscore@1.6.0'
  ]);

  api.use([
    'matb33:collection-hooks@1.3.0',
    'perfdog1:collection-behaviours@3.0.0'
  ]);

  api.use([
    'aldeed:collection2@2.10.0 || 4.0.0',
    'aldeed:simple-schema@1.5.4'
  ], ['client', 'server'], {weak: true});

  api.imply('perfdog1:collection-behaviours');

  api.mainModule('timestampable.coffee');
});
