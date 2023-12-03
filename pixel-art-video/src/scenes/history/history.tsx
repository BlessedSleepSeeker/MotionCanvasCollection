import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import title from '../title';
import mosaic from '../../img/mosaic_icon.png'
import cross_stitch from '../../img/cross-stitch.png'
import pointillism from '../../img/pointillism.png'

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
        <Layout ref={lay} direction={'row'} opacity={0} position={[0, 100]} layout>
          <Img
            ref={img1}
            src={mosaic}
            opacity={1}
            size={[600, 600]}
          />
          <Img
            ref={img2}
            src={cross_stitch}
            opacity={0}
            size={[600, 600]}
          />
          <Img
            ref={img3}
            src={pointillism}
            opacity={0}
            size={[600, 600]}
          />
        </Layout>
      
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
      img2().opacity(1, 1),
      title().text("Cross-Stitch", 1),
  )
  yield* waitUntil("CrossStitch End");

  yield* all(
    img3().opacity(1, 1),
    title().text("Pointillism", 1),
  )
  yield* waitUntil("Point End");

});