import { moduleFor, test } from 'ember-qunit';

moduleFor('route:tester/posts/viewpost/newcomment', 'Unit | Route | tester/posts/viewpost/newcomment', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
