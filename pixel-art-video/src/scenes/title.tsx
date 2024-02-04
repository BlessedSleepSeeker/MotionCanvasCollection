import {makeScene2D, Circle, Grid, Txt, Layout, Rect, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, loopUntil, sequence, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();

  const foreground = createRef<Node>();

  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();
  
  const rect1 = createRef<Rect>();
  const rect2 = createRef<Rect>();
  const rect3 = createRef<Rect>();
  const rect4 = createRef<Rect>();
  const rect5 = createRef<Rect>();
  const rect6 = createRef<Rect>();

  view.add(
    <>
      <Grid
        ref={grid}
        height={'100%'}
        width={'100%'}
        stroke={'#FFF'}
        strokeFirst={true}
        fill={'#FFFFFF'}
        spacing={200}
        start={0.5}
        end={0.5}
      />
      <Node ref={foreground} opacity={1}>
        <Layout direction={'column'} alignItems={'center'} layout>
          <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={150}></Txt>
          <Txt ref={subtitle} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}></Txt>
        </Layout>
        <Rect
          ref={rect1}
          size={30}
          fill={"#FFF"}
          position={[-750, -390]}
          offset={[-1, -1]}
          opacity={0}
        />
        <Rect
          ref={rect2}
          size={30}
          fill={"#FFF"}
          position={[60, -330]}
          offset={[-1, -1]}
          opacity={0}
        />
        <Rect
          ref={rect3}
          size={30}
          fill={"#FFF"}
          position={[-120, 180]}
          offset={[-1, -1]}
          opacity={0}
        />
        <Rect
          ref={rect4}
          size={30}
          fill={"#FFF"}
          position={[-660, 240]}
          offset={[-1, -1]}
          opacity={0}
        />
        <Rect
          ref={rect5}
          size={30}
          fill={"#FFF"}
          position={[720, 420]}
          offset={[-1, -1]}
          opacity={0}
        />
        <Rect
          ref={rect6}
          size={30}
          fill={"#FFF"}
          position={[630, -240]}
          offset={[-1, -1]}
          opacity={0}
        />
      </Node>
    </>,
  );
  
  yield* sequence(1,
    all(
      grid().stroke('#666', 2),
      grid().end(1, 2),
      grid().start(0, 2),
      grid().spacing(30, 3),
    ),
    title().text("The Art in Pixel-Art", 2),
    //subtitle().text("an artistic overview of Pixel-Art", 1.5),
  );

  yield* loopUntil("title_finished", () =>  sequence(0.3,
    rect1().opacity(1, 2).to(0, 2),
    rect6().opacity(1, 2).to(0, 2),
    rect3().opacity(1, 2).to(0, 2),
    rect5().opacity(1, 2).to(0, 2),
    rect2().opacity(1, 2).to(0, 2),
    rect4().opacity(1, 2).to(0, 2),
  ));

  yield* all(
    foreground().opacity(0, 1),
  );
});