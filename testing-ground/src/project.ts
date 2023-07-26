import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';
import pixel_grid from './scenes/pixel_grid?scene';

export default makeProject({
  scenes: [
    example,
    //pixel_grid
  ],
});
