import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';
import bleeding from "../../img/bleeding.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();
  const img = createRef<Img>();

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
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} position={[0, 0]} fill="#FFF" antialiased={false} fontSize={150}>Technologie et Pixel-Art</Txt>
        <Img
            ref={img}
            src={bleeding}
            height={700}
            position={[0, 0]}
            opacity={0}
          />
    </>, 
  );

  yield* slideTransition(Direction.Bottom);

  yield* beginSlide('crt')
  
  yield* all(
    title().text("CRT vs LCD", 1),
  )
  yield* all(
    title().position([0, -425], 1),
    title().fontSize(100, 1),
    img().opacity(1, 3)
  )
  
  yield* beginSlide('paletteswap')

});