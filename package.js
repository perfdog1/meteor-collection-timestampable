Package.describe({
  git: 'https://github.com/rodcope1/meteor-collection-timestampable.git',
  name: 'rodcope1:collection-timestampable',
  summary: 'Add timestamps to collections',
  version: '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');

  api.use([
    'check',
    'coffeescript@2.0.0',
    'underscore'
  ]);

  api.use([
    'matb33:collection-hooks@0.8.3',
    'rodcope1:collection-behaviours@2.0.0'
  ]);

  api.use([
    'aldeed:autoform@4.0.0 || 5.0.0',
    'aldeed:collection2@2.0.0',
    'aldeed:simple-schema@1.0.3'
  ], ['client', 'server'], {weak: true});

  api.imply('rodcope1:collection-behaviours');

  api.addFiles('timestampable.coffee');
});
