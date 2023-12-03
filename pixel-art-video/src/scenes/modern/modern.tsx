import {makeScene2D, Circle, Grid, Txt, Layout, Img, Node} from '@motion-canvas/2d';
import {Direction, all, waitUntil, chain, createRef, slideTransition} from '@motion-canvas/core';
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
      <Txt ref={title} offset={[-1, 0]} opacity={1} position={[-500, -30]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={150}>Modern Pixel-Art</Txt>
      
    </>,
  );

  yield* slideTransition(Direction.Bottom);
  yield* waitUntil('seeker') 
  yield* all(
    title().fontSize(100, 1),
    title().text("BlessedSleepSeeker", 1),
    title().fontSize(75, 1),
    title().position([-900, -415], 1),
    example().opacity(1, 1),
  );

  yield* waitUntil('camiunkow')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("CamiUnknown", 1),
    example().src(light, 0),
    example().size([null, null], 1),
  );
  yield* example().opacity(1, 1),

  yield* waitUntil('nicoduran')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("N1coDuran", 1),
    example().src(icelock, 0),
  );
  yield* example().opacity(1, 1),

  yield* waitUntil('royalnaym')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("RoyalNaym", 1),
    example().src(minecraft, 0),
  );
  yield* example().opacity(1, 1),

  yield* waitUntil('chelfaust 1')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("chel_faust", 1),
    example().src(cloud, 0),
    example().size([1000, null], 1),
  );
  yield* chain(
    example().opacity(1, 1),
    example().size([null, null], 1),
    example().position([0, 300], 3).to([0, -300], 3).to([0, 0], 3),
    example().size([1000, null], 1),
  )  

  yield* waitUntil('chelfaust 2')
  yield* example().opacity(0, 1),
  yield* all(
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

  yield* waitUntil('blasphemous')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("Blashphemous 2", 1),
    example().src(blash, 0),
    example().size([null, null], 1),
  );
  yield* example().opacity(1, 1),

  yield* waitUntil('pxtommi')
  yield* example().opacity(0, 1),
  yield* all(
    title().text("PxTommi", 1),
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

  yield* waitUntil('going further')
});