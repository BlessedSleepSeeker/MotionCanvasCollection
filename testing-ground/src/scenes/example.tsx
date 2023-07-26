import {makeScene2D, Circle, Grid} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();

  view.add(
    <Grid
      ref={grid}
      size={'90%'}
      stroke={'#666'}
      strokeFirst={true}
      fill={'#FFFFFF'}
      spacing={200}
      start={0.5}
      end={0.5}
    />,
  );

  yield* all(
    grid().stroke('#FFF', 1).to('#666', 1),
    grid().end(1, 2),
    grid().start(0, 2),
    grid().spacing(100, 2).wait(10)
  );
});