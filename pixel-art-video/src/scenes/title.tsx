import {makeScene2D, Circle, Grid, Txt, Layout, Rect} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, loopUntil, sequence, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
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
      <Layout direction={'column'} alignItems={'center'} layout>
        <Txt ref={title} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={200}>Pixel Art</Txt>
        <Txt ref={subtitle} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}>Or the Art of Putting Tiny Squares on a Grid</Txt>
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
    </>,
  );
  yield* all(
    grid().stroke('#666', 2),
    grid().end(1, 2),
    grid().start(0, 2),
    grid().spacing(30, 3),
  );
  yield* all(
    title().opacity(1, 3),
    subtitle().opacity(1, 3),
  );
  yield* loopUntil("title_finished", () =>  sequence(0.3,
    rect1().opacity(1, 2).to(0, 2),
    rect6().opacity(1, 2).to(0, 2),
    rect3().opacity(1, 2).to(0, 2),
    rect5().opacity(1, 2).to(0, 2),
    rect2().opacity(1, 2).to(0, 2),
    rect4().opacity(1, 2).to(0, 2),
  ));
  //yield* waitUntil("title_finished")
});