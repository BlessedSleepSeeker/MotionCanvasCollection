import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Direction, Reference, ThreadGenerator, all, beginSlide, chain, createRef, slideTransition, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const ref1 = createRef<Img>();
  const ref2 = createRef<Img>();
  const ref3 = createRef<Img>();
  const ref4 = createRef<Img>();
  const source1 = createRef<Txt>();
  const source2 = createRef<Txt>();
  const source3 = createRef<Txt>();
  const source4 = createRef<Txt>();


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
      <Layout direction={'column'} alignItems={'center'} gap={40} layout>
        <Layout direction={'row'} alignItems={'center'} gap={40} layout>
        <Layout direction={'column'} alignItems={'center'} gap={5} layout>
          <Img
            ref={ref1}
            src="https://images.lvp.llnw.net/81d5fd2a308b4f5c981628b17e9fcadd/media/ecfd2ad687d04eceb7769ff69921c9c2/vgT.540x304.jpeg"
            width={300}
            radius={2}
            antialiased={false}
          />,
          <Txt ref={source1} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>A Link To The Past</Txt>
        </Layout>
        <Layout direction={'column'} alignItems={'center'} gap={5} layout>
          <Img
            ref={ref2}
            src="https://i0.wp.com/www.the-pixels.com/wp-content/uploads/2016/10/171.jpg"
            width={300}
            radius={2}
            antialiased={false}
          />,
          <Txt ref={source2} opacity={0}  fontFamily={'Sci-Bi'}   fill="#FFF" antialiased={false}>Castlevania</Txt>
        </Layout>
        </Layout>
        <Layout direction={'row'} alignItems={'center'} gap={40} layout>
          <Layout direction={'column'} alignItems={'center'} gap={5} layout>
            <Txt ref={source3} opacity={0}  fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Mark Ferarri</Txt>
            <Img
              ref={ref3}
              src="https://images.squarespace-cdn.com/content/v1/5c12ee148f5130143eb7f707/1546543002163-Y9I3M67OLPRAUNLW5UKT/Cove.jpg"
              width={300}
              radius={2}
              antialiased={false}
            />,
          </Layout>
          <Layout direction={'column'} alignItems={'center'} gap={5} layout>
            <Txt ref={source4} opacity={0}  fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>???</Txt>
            <Img
              ref={ref4}
              src="https://images.unsplash.com/photo-1679218407381-a6f1660d60e9"
              width={300}
              radius={2}
              antialiased={false}
            />,
          </Layout>
        </Layout>
      </Layout>
    </>,
  );
  

  yield* slideTransition(Direction.Right);
  yield* chain(
    ref1().width(1200, 3),
    source1().opacity(1, 1),
    ref1().width(300, 3),
    source1().opacity(0, 0.3),
    ref2().width(1200, 3),
    source2().opacity(1, 1),
    ref2().width(300, 3),
    source2().opacity(0, 0.3),
    ref3().width(1200, 3),
    source3().opacity(1, 1),
    ref3().width(300, 3),
    source3().opacity(0, 0.3),
    ref4().width(1200, 3),
    source4().opacity(1, 1),
    ref4().width(300, 3),
    source4().opacity(0, 0.3),
  )


  yield* beginSlide('example part 2')
  yield* beginSlide('vocab')
});