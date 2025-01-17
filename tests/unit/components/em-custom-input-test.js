import {
  moduleForComponent,
  test
  } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('em-custom-input', {
  // Specify the other units that are required for this test
  integration: true
});

test('Input gets rendered', function(assert) {

  this.render(hbs`{{#em-custom-input}}{{input}}{{/em-custom-input}}`);

  assert.equal(this.$().find('input').length, 1, 'Input is rendered correctly');
});

test('Input renders with custom css', function(assert) {
  this.render(hbs`{{#em-custom-input label='My label' elementClass="col-md-6" controlWrapper="col-md-6" labelClass="col-md-4" as |mainComponent|}}{{input class=mainComponent.elementClass}}{{/em-custom-input}}`);

  assert.ok(this.$().find('label').hasClass('col-md-4'), 'Label has correct class');
  assert.ok(this.$().find('input').parent().parent().hasClass('col-md-6'), 'Input parent has correct class');
  assert.ok(this.$().find('input').hasClass('col-md-6'), 'Input has correct class');
});

test('cid correctly sets the id for the input and it\'s label', function(assert) {
  this.render(hbs`{{#em-custom-input label='some label' cid='test-cid' as |mainComponent|}}{{input id=mainComponent.id}}{{/em-custom-input}}`);

  assert.equal(this.$('input').attr('id'), 'test-cid', 'input has correct id');
  assert.equal(this.$('label').attr('for'), 'test-cid', 'label has correct \'for\'');
});

test('cid is property by default', function(assert) {
  this.render(hbs`{{#em-custom-input label='some label' property='test-cid' as |mainComponent|}}{{input id=mainComponent.id}}{{/em-custom-input}}`);

  assert.equal(this.$('input').attr('id'), 'test-cid', 'input has correct id');
  assert.equal(this.$('label').attr('for'), 'test-cid', 'label has correct \'for\'');
});
