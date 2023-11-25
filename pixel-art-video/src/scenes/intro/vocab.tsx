import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import sword5x5 from '../../img/sword5x5.png'

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const pixel = createRef<Rect>();
  const line = createRef<Line>();
  const sprite = createRef<Img>();
  const title = createRef<Txt>();
  const height = createRef<Txt>();
  const width = createRef<Txt>();

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
        <Txt ref={title} opacity={1} position={[0, -420]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}></Txt>
        <Txt ref={height} opacity={0} position={[-350, -35]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}>5</Txt>
        <Txt ref={width} opacity={0} position={[-50, 265]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}>5</Txt>
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

  yield* waitUntil("pixel_color")
  yield* pixel().fill("68c2d3", 1).to("a2dcc7", 1).to("ede19e", 1).to("d3a068", 1).to("b45252", 1).to("ffffff", 1);

  yield* waitUntil("canvas")
  yield* all(
    pixel().opacity(0.3, 1),
  );
  yield* all(
    title().text("Canvas", 1),
    line().opacity(1, 1),
    height().opacity(1, 1),
    width().opacity(1, 1),
  );
  
  yield* all(
    chain(
      line().points([[0, 100],
        [0, 500],
        [500, 500]], 1),
      line().points([[0, -100],
        [0, 500],
        [300, 500]], 1),
      line().points([[0, 0],
        [0, 500],
        [500, 500]], 1)
    ),
    chain(
      height().text("4", 0.3),
      waitFor(0.7),
      all(
        height().text("8", 0.3),
        width().text("3", 0.3),
        waitFor(0.7),
      ),
      all(
        height().text("5", 0.7),
        width().text("5", 0.7),
        waitFor(0.3),
      ),
    )
  )
  

  yield* waitUntil("sprite")

  yield* all(
    pixel().opacity(0, 1),
    sprite().opacity(1, 2),
    title().text("Sprite", 1)
    )

    yield* waitUntil("vocab finished")
  


});