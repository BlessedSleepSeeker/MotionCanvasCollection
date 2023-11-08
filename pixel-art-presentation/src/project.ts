import {makeProject} from '@motion-canvas/core';

import title from './scenes/title?scene';
import example from './scenes/intro/example?scene';
import vocab from './scenes/intro/vocab?scene';
import palette from './scenes/intro/palette?scene';
import history from './scenes/history/history?scene';
import modern_history from './scenes/history/modern_history?scene';
import def_main from './scenes/definition/def_main?scene';
import pareidolia from './scenes/definition/pareidolia?scene';
import crt from './scenes/technology/crt?scene';
import color_cycling from './scenes/technology/color_cycling?scene';
import color_cycling_example from './scenes/technology/color_cycling_example?scene';
import modern from './scenes/modern/modern?scene';
import transgression from './scenes/modern/transgression?scene';
import conclusion from './scenes/conclusion?scene';

import './global.css';

export default makeProject({
  scenes: [title, example, vocab, palette, history, modern_history, def_main, pareidolia, crt, color_cycling, color_cycling_example, modern, transgression, conclusion],
});
