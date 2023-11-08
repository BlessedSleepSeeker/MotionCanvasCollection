import {makeScene2D, Circle, Grid, Txt, Layout} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition, waitFor} from '@motion-canvas/core';

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
        <Txt ref={subtitle} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Ou l'art de mettre des petits carrés sur une grille</Txt>
      </Layout>
    </>,
  );
  
  yield* beginSlide('title')
  yield* all(
    grid().stroke('#666', 2),
    grid().end(1, 2),
    grid().start(0, 2),
    grid().spacing(30, 3),
    title().opacity(1, 3),
    subtitle().opacity(1, 3),
  );
  yield* beginSlide('example')
});