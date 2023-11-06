import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';
import hld from '../../img/hyperlightdrifter.png'

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const img1 = createRef<Img>();
  const img2 = createRef<Img>();
  const img3 = createRef<Img>();
  const timeline = createRef<Line>();

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
        <Txt fontFamily={'Sci-Bi'} fill="#FFF" fontSize={100} antialiased={false}>Histoire Moderne</Txt>
        <Layout direction={'row'} alignItems={'center'} gap={30} layout>
          <Img
            ref={img1}
            src={"https://upload.wikimedia.org/wikipedia/commons/f/f8/Pong.png"}
            width={400}
            height={400}
          />
          <Img
            ref={img2}
            src={"https://1.bp.blogspot.com/-J58XTSgOhCg/XyAnO-pA2xI/AAAAAAAAowA/xmVnd3VofV8d6zgq2CWkhXUQPbZNoF2WQCLcBGAsYHQ/s1600/image1.png"}
            width={400}
            height={400}
          />
          <Img
            ref={img3}
            src={"https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg"}
            width={400}
            height={400}
          />
          <Img
            src={hld}
            width={400}
            height={400}
          />
        </Layout>
      </Layout>
      
    </>,
  );
  yield* slideTransition(Direction.Right);
  
  yield* beginSlide('history')
});