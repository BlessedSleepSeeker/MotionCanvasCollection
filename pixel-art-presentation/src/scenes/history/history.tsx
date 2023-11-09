import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';
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
      <Layout direction={'column'} alignItems={'center'} gap={50} layout>
        <Txt ref={title} fontFamily={'Sci-Bi'} fill="#FFF" fontSize={200} antialiased={false}>Timeline</Txt>
        <Layout ref={lay} opacity={0} direction={'row'} alignItems={'center'} gap={30} layout>
          <Img
            ref={img1}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Pompei_BW_2013-05-13_11-33-36.jpg/1024px-Pompei_BW_2013-05-13_11-33-36.jpg"}
            width={600}
            height={600}
          />
          <Img
            ref={img2}
            src={"https://upload.wikimedia.org/wikipedia/commons/b/b8/Cross_stitch_embroidery.jpg"}
            width={600}
            height={600}
          />
          <Img
            ref={img3}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Luce_morning_d%C3%A9tail_pieds.jpg/1280px-Luce_morning_d%C3%A9tail_pieds.jpg"}
            width={600}
            height={600}
          />
        </Layout>
      </Layout>
      
    </>,
  );
  yield* slideTransition(Direction.Bottom);
  
  yield* all(
    title().text("Ancêtres", 2),
    title().fontSize(100, 2),
    lay().opacity(1, 2),
  )

  yield* beginSlide('modern history')
});