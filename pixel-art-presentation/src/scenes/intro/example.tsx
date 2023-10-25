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
      <Layout direction={'column'} alignItems={'center'} gap={20} layout>
        <Layout direction={'row'} alignItems={'center'} gap={20} layout>
        <Layout direction={'column'} alignItems={'center'} gap={5} layout>
          <Img
            ref={ref1}
            src="https://upload.wikimedia.org/wikipedia/en/4/4e/World_1-1_Super_Mario_Bros.png"
            width={600}
            radius={2}
            antialiased={false}
          />,
          <Txt ref={source1} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Super Mario Bros - 1985</Txt>
        </Layout>
        <Layout direction={'column'} alignItems={'center'} gap={5} layout>
          <Img
            ref={ref2}
            src="https://upload.wikimedia.org/wikipedia/en/1/14/GBA_Advance_Wars.png"
            width={600}
            radius={2}
            antialiased={false}
          />,
          <Txt ref={source2} opacity={1}  fontFamily={'Sci-Bi'}   fill="#FFF" antialiased={false}>Advance War - 2001</Txt>
        </Layout>
        </Layout>
        <Layout direction={'row'} alignItems={'center'} gap={20} layout>
          <Layout direction={'column'} alignItems={'center'} gap={5} layout>
            <Txt ref={source3} opacity={1}  fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Mark Ferarri - 1987 to 1997</Txt>
            <Img
              ref={ref3}
              src="https://images.squarespace-cdn.com/content/v1/5c12ee148f5130143eb7f707/1546543002163-Y9I3M67OLPRAUNLW5UKT/Cove.jpg"
              width={600}
              radius={2}
              antialiased={false}
            />,
          </Layout>
          <Layout direction={'column'} alignItems={'center'} gap={5} layout>
            <Txt ref={source4} opacity={1}  fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false}>Maniac Mansion - 1987</Txt>
            <Img
              ref={ref4}
              src="https://upload.wikimedia.org/wikipedia/en/7/76/Maniac_Mansion.png"
              width={600}
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
    ref1().width(600, 3),
    ref2().width(1200, 3),
    ref2().width(600, 3),
    ref3().width(1200, 3),
    ref3().width(600, 3),
    ref4().width(1200, 3),
    ref4().width(600, 3),
  );

  yield* beginSlide('vocab')
});