import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import title from '../title';
import mosaic from '../../img/mosaic_icon.png'
import cross_stitch from '../../img/cross-stitch.png'
import pointillism from '../../img/pointillism.png'
import asciiart from '../../img/asciiart.png'
import ogpixelart from '../../img/enemies.png'
import threedim_rise from '../../img/sm64.jpg'
import renaissance from '../../img/renaissance.jpg'

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const img1 = createRef<Img>();
  const img2 = createRef<Img>();
  const img3 = createRef<Img>();

  const asciiartRef = createRef<Img>();
  const ogpixelartRef = createRef<Img>();
  const threedim_riseRef = createRef<Img>();
  const renaissanceRef = createRef<Img>();

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
      <Txt ref={title} fontFamily={'Sci-Bi'} fill="#FFF" fontSize={100} position={[0, -420]} antialiased={false}>History</Txt>
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
        <Img
            ref={asciiartRef}
            src={asciiart}
            opacity={0}
            position={[0, 100]}
        />
        <Img
            ref={ogpixelartRef}
            src={ogpixelart}
            opacity={0}
        />
        <Img
            ref={threedim_riseRef}
            src={threedim_rise}
            opacity={0}
            position={[0, 25]}
        />
        <Img
            ref={renaissanceRef}
            src={renaissance}
            opacity={0}
            size={[1400, 800]}
            position={[0, 100]}
        />
    </>,
  );
  yield* slideTransition(Direction.Bottom);
  
  yield* all(
    title().text("Ancestors", 1),
  )
  yield* waitUntil("Ancestors");

  yield* all(
    lay().opacity(1, 2),
    title().text("Roman Mosaïc", 0.6),
  )
  yield* waitUntil("Mosaic end");

  yield* all(
      img2().opacity(1, 1),
      title().text("Cross-Stitch", 0.6),
  )
  yield* waitUntil("CrossStitch End");

  yield* all(
    img3().opacity(1, 1),
    title().text("Pointillism", 0.6),
  )
  yield* waitUntil("Point End");
  yield* all(
    lay().opacity(0, 1),
  )
  yield* all(
    title().text("ASCII Art", 0.5),
    asciiartRef().opacity(1, 2),
  )
  yield* waitUntil("Ascii Start");
  yield* all(
    asciiartRef().size([800, 800], 3),
  )
  yield* waitUntil("Ascii End");
  yield* all(
    asciiartRef().opacity(0, 1),
  )
  yield* all(
    ogpixelartRef().opacity(1, 1),
    title().text("PXL : The Hegemony of Pixel-Art", 1),
  )
  yield* waitUntil("Golden Age End");
  yield* all(
    ogpixelartRef().opacity(0, 1),
  )
  yield* all(
    threedim_riseRef().opacity(1, 1),
    title().text("PXL 2 : The Three Dimensions", 1),
  )

  yield* waitUntil("3D End");
  yield* all(
    threedim_riseRef().opacity(0, 1),
  )
  yield* all(
    renaissanceRef().opacity(1, 1),
    title().text("PXL 3 : The Return of the King", 1),
  )

  yield* waitUntil("History End");

});