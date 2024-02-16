import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | istorija', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Istorija />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Istorija>
        template block text
      </Istorija>
    `);

    assert.dom().hasText('template block text');
  });
});
