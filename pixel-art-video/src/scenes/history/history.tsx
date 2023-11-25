import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import title from '../title';

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const img1 = createRef<Img>();
  const img2 = createRef<Img>();
  const img3 = createRef<Img>();
  const title = createRef<Txt>();
  const timeline = createRef<Line>();
  const lay = createRef<Layout>();

  view.add(
    <>
      <Grid
        ref={grid}
        height={'100%'}
        width={'100%'}
        stroke={'#666'}
        strokeFirst={true}
        fill={'#FFFFFF'}
        spacing={100}
        start={1}
        end={0}
        />
      <Txt ref={title} fontFamily={'Sci-Bi'} fill="#FFF" fontSize={100} position={[0, -420]} antialiased={false}>Ancestors</Txt>
        <Node ref={lay} opacity={0} position={[0, 100]}>
          <Img
            ref={img1}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pompei_BW_2013-05-13_11-33-36.jpg/1024px-Pompei_BW_2013-05-13_11-33-36.jpg"}
            width={600}
            height={600}
            opacity={1}
          />
          <Img
            ref={img2}
            src={"https://upload.wikimedia.org/wikipedia/commons/b/b8/Cross_stitch_embroidery.jpg"}
            opacity={0}
            size={[1200, 800]}
          />
          <Img
            ref={img3}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Luce_morning_d%C3%A9tail_pieds.jpg/1280px-Luce_morning_d%C3%A9tail_pieds.jpg"}
            opacity={0}
            size={[1200, 800]}
          />
        </Node>
      
    </>,
  );
  yield* slideTransition(Direction.Bottom);
  
  yield* all(
    title().text("Ancestors", 2),
  )
  yield* waitUntil("Ancestors");

  yield* all(
    lay().opacity(1, 2),
    title().text("Roman Mosaïc", 1),
  )
  yield* waitUntil("Mosaic end");

  yield* all(
      img1().opacity(0, 1),
      img2().opacity(1, 1),
      title().text("Cross-Stitch", 1),
  )
  yield* waitUntil("CrossStitch End");

  yield* all(
    img2().opacity(0, 1),
    img3().opacity(1, 1),
    title().text("Pointillism", 1),
  )
  yield* waitUntil("Point End");


  yield* beginSlide('modern history')
});