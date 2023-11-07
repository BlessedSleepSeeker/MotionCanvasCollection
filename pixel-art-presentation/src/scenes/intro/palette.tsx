import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition} from '@motion-canvas/core';
import sword5x5 from '../../img/sword5x5.png'

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
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
        spacing={100}
        start={1}
        end={0}
        />
        <Txt ref={title} opacity={1} position={[0, -300]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}>Palette</Txt>
        <Layout direction={'row'} alignItems={'center'} gap={400} layout>
        <Layout direction={'row'} alignItems={'center'} gap={0} layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            width={100}
            height={100}
            fill={'fdfdf8'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'7b53ad'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'2d93dd'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'e6da29'}
          />
        </Layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
        <Rect 
            width={100}
            height={100}
            fill={'1b1c33'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'28c641'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'d32734'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'da7d22'}
          />
        </Layout>
        </Layout>
        <Layout direction={'row'} alignItems={'center'} gap={0} layout>
          <Layout direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            width={100}
            height={100}
            fill={'9bbc0f'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'306230'}
          />
          </Layout>
          <Layout direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            width={100}
            height={100}
            fill={'8bac0f'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'0f380f'}
          />
          </Layout>
        </Layout>
      </Layout>
    </>,
  );

  yield* slideTransition(Direction.Right);

  
  yield* beginSlide('history')
  

});