import {makeScene2D, Circle, Grid, Txt, Layout} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();

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
        <Txt ref={title} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}>Pixel Art</Txt>
        <Txt ref={subtitle} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Or the art of putting tiny squares on a grid</Txt>
      </Layout>
    </>,
  );

  yield* all(
    grid().stroke('#666', 2),
    grid().end(1, 2),
    grid().start(0, 2),
    grid().spacing(30, 3),
    title().opacity(1, 3),
    subtitle().opacity(1, 3),
  );
});