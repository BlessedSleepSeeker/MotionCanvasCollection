import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const pixel = createRef<Rect>();
  const line = createRef<Line>();



  view.add(
    <>
      <Grid
        ref={grid}
        height={'100%'}
        width={'100%'}
        stroke={'#666'}
        strokeFirst={true}
        fill={'#FFFFFF'}
        spacing={30}
        start={1}
        end={0}
        />
        <Rect
          ref={pixel}
          height={0}
          width={0}
          fill={'#FFFFFF'}
        />
        <Line
        ref={line}
        position={[-300, -300]}
        stroke={'#FFF'}
        lineWidth={8}
        startArrow
        endArrow
        opacity={0}
        points={[
          [0, 0],
          [0, 500],
          [500, 500],
        ]}
      />
    </>,
  );

  yield* slideTransition(Direction.Right);
  yield* all(
    grid().spacing(1000, 3),
    grid().opacity(0, 2),
    pixel().size(100, 3),
  );

  yield* beginSlide('canvas')
  yield* all(
    grid().spacing(100, 3),
    grid().opacity(1, 1),
    pixel().opacity(0, 1),
  );
  yield* all(
    line().opacity(1, 1),
  );

  yield* all(
    line().points(),
  );

  yield* beginSlide('sprite')
});