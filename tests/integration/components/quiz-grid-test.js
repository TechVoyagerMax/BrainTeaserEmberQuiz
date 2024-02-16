import { module, test } from 'qunit';
import { setupRenderingTest } from 'brain-teaser/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | quiz-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<QuizGrid />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <QuizGrid>
        template block text
      </QuizGrid>
    `);

    assert.dom().hasText('template block text');
  });
});
