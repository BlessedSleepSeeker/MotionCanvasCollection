import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition, waitFor} from '@motion-canvas/core';
import dracula_lcd from "../../img/dracula_lcd.jpg"
import dracula_crt from "../../img/dracula_crt.jpg"
import monster_lcd from "../../img/monster_lcd.png"
import monster_crt from "../../img/monster_crt.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();
  const dracula_lcd_ = createRef<Img>();
  const dracula_crt_ = createRef<Img>();
  const monster_lcd_ = createRef<Img>();
  const monster_crt_ = createRef<Img>();

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
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} position={[0, -30]} fill="#FFF" antialiased={false} fontSize={150}>Technologie et Pixel-Art</Txt>
        <Img
            ref={dracula_lcd_}
            src={dracula_lcd}
            height={800}
            position={[-400, 50]}
            opacity={0}
        />
        <Img
            ref={dracula_crt_}
            src={dracula_crt}
            height={800}
            position={[-400, 50]}
            opacity={0}
        />
        <Img
            ref={monster_lcd_}
            src={monster_lcd}
            height={800}
            position={[400, 50]}
            opacity={0}
        />
        <Img
            ref={monster_crt_}
            src={monster_crt}
            height={800}
            position={[400, 50]}
            opacity={0}
        />
    </>, 
  );

  yield* slideTransition(Direction.Bottom);

  yield* beginSlide('lcd')
  
  yield* all(
    title().text("LCD vs CRT", 1),
  )
  yield* waitFor(1)
  yield* all(
    title().position([0, -425], 1),
    title().fontSize(100, 1),
    title().text("LCD", 1),
    dracula_lcd_().opacity(1, 3),
    monster_lcd_().opacity(1, 3),
  )

  yield* beginSlide('crt')

  yield* all(
    title().text("CRT", 1),
    dracula_lcd_().opacity(0, 2),
    dracula_crt_().opacity(1, 2),
    monster_lcd_().opacity(0, 2),
    monster_crt_().opacity(1, 2),
  )
  
  yield* beginSlide('paletteswap')

});