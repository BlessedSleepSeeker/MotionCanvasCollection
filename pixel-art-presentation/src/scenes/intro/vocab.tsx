import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition, waitFor} from '@motion-canvas/core';
import sword5x5 from '../../img/sword5x5.png'

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const pixel = createRef<Rect>();
  const line = createRef<Line>();
  const sprite = createRef<Img>();
  const title = createRef<Txt>();



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
        <Txt ref={title} opacity={1} position={[0, -425]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}>Vocabulaire</Txt>
        <Rect
          ref={pixel}
          height={1}
          width={1}
          position={[-50, 50]}
          fill={'#FFFFFF'}
          opacity={0}
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
      <Img
            ref={sprite}
            src={sword5x5}
            position={[-50, -50]}
            opacity={0}
          />
    </>,
  );

  yield* slideTransition(Direction.Right);
  yield* waitFor(1)
  yield* all(
    grid().spacing(100, 3),
  );
  yield* all(
    pixel().opacity(1, 1),
    pixel().size([100,100], 1),
    title().text("Pixel", 1)
  );

  yield* waitFor(4)
  yield* all(
    pixel().fill("68c2d3", 1).to("a2dcc7", 1).to("ede19e", 1).to("d3a068", 1).to("b45252", 1)
  )

  yield* beginSlide('canvas')
  yield* all(
    pixel().opacity(0.3, 1),
  );
  yield* all(
    title().text("Canvas", 1),
    line().opacity(1, 1),
  );

  yield* chain(
    line().points([[0, 100],
      [0, 500],
      [500, 500]], 2),
    line().points([[0, -100],
      [0, 500],
      [300, 500]], 2),
    line().points([[0, 0],
      [0, 500],
      [500, 500]], 2)
  );

  yield* beginSlide('sprite')

  yield* all(
    pixel().opacity(0, 1),
    sprite().opacity(1, 2),
    title().text("Sprite", 1)
    )

  yield* beginSlide('palette')
  


});