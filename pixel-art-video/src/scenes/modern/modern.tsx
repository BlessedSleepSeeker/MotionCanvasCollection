import {makeScene2D, Circle, Grid, Txt, Layout, Img, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, slideTransition} from '@motion-canvas/core';
import blash from "../../img/modern/blasphemous2.jpg"
import cloud from "../../img/modern/cloud.png"
import cloud2 from "../../img/modern/cloud2.jpg"
import ert from "../../img/modern/ert.jpg"
import icelock from "../../img/modern/icelock.jpg"
import light from "../../img/modern/light.png"
import minecraft from "../../img/modern/minecraft.png"
import goat from "../../img/modern/oof.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const title_lay = createRef<Layout>();
  const example = createRef<Img>();

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
      <Img
        ref={example}
        src={ert}
        size={[800, 800]}
        position={[0, 0]}
        opacity={0}
        smoothing={false}
      />
      <Layout ref={title_lay} alignContent={'start'} position={[0, -30]}>
        <Txt ref={title}  opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={150}>Pixel-Art Moderne</Txt>
      </Layout>
      
    </>,
  );

  yield* slideTransition(Direction.Bottom);
  yield* beginSlide('blasphemous') 
  yield* all(
    title().fontSize(100, 1),
    title().text("Ert - 2023", 1),
    title().fontSize(75, 1),
    title_lay().position([-720, -415], 1),
    example().opacity(1, 1),
  );

  yield* beginSlide('modern example 2')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@CamiUnknown - 2023", 1),
    title_lay().position([-560, -415], 1),
    example().src(light, 0),
    example().size([null, null], 1),
  );
  yield* example().opacity(1, 1),

  yield* beginSlide('modern example 3')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@N1coDuran - 2023", 1),
    title_lay().position([-590, -415], 1),
    example().src(icelock, 0),
  );
  yield* example().opacity(1, 1),

  yield* beginSlide('modern example 4')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@RoyalNaym - 2023", 1),
    title_lay().position([-600, -415], 1),
    example().src(minecraft, 0),
  );
  yield* example().opacity(1, 1),

  yield* beginSlide('modern example 5')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@chel_faust - 2023", 1),
    title_lay().position([-585, -415], 1),
    example().src(cloud, 0),
    example().size([1000, null], 1),
  );
  yield* chain(
    example().opacity(1, 1),
    example().size([null, null], 1),
    example().position([0, 300], 3).to([0, -300], 3).to([0, 0], 3),
    example().size([1000, null], 1),
  )  

  yield* beginSlide('modern example 6')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@chel_faust - 2023", 1),
    title_lay().position([-585, -415], 1),
    example().src(cloud2, 0),
    example().size([1000, null], 1),
  );
  yield* example().opacity(1, 1),
  yield* chain(
    example().opacity(1, 1),
    example().size([null, null], 1),
    example().position([0, 300], 3).to([0, -300], 3).to([0, 0], 3),
    example().size([1000, null], 1),
  )

  yield* beginSlide('modern example 7')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("Blashphemous 2 - 2023", 1),
    title_lay().position([-545, -415], 1),
    example().src(blash, 0),
    example().size([null, null], 1),
  );
  yield* example().opacity(1, 1),

  yield* beginSlide('modern example 8')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("@PxTommi - 2023", 1),
    title_lay().position([-625, -415], 1),
    example().src(goat, 0),
    example().size([null, null], 1),
  );
  yield* example().opacity(1, 1),
  yield* chain(
    example().antialiased(false, 0),
    example().opacity(1, 1),
    example().size([null, '1000%'], 1),
    example().position([0, -600], 3).to([-1200, -600], 3).to([0, 0], 3),
    example().size([null, null], 1),
  )

  yield* beginSlide('going further')
});