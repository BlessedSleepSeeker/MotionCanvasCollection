import {makeScene2D, Circle, Grid, Txt, Layout, Img, Node} from '@motion-canvas/2d';
import {Direction, Vector2, all, beginSlide, createRef, sequence, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import dracula_lcd from "../../img/dracula_lcd.jpg"
import dracula_crt from "../../img/dracula_crt.jpg"
import monster_lcd from "../../img/monster_lcd.png"
import monster_crt from "../../img/monster_crt.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Node>();
  const subtitle = createRef<Txt>();
  const dracula_lcd_ = createRef<Img>();
  const dracula_crt_ = createRef<Img>();

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
        <Node ref={title} position={[0, -30]} >
          <Txt ref={subtitle} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={150}></Txt>
        </Node>
        <Img
            ref={dracula_lcd_}
            src={dracula_lcd}
            height={800}
            position={[0, 100]}
            opacity={0}
        />
        <Img
            ref={dracula_crt_}
            src={dracula_crt}
            height={800}
            position={[15, 100]}
            opacity={0}
        />
    </>, 
  );

  yield* slideTransition(Direction.Bottom);
  
  yield* subtitle().text("Pixel-Art and Technology", 2)
  yield* waitUntil("tech intro");
  
  yield* all(
    subtitle().text("LCD vs CRT", 1),
  )
  yield* waitUntil("LCD vs CRT intro");
  subtitle().moveOffset(new Vector2(-1, -1))
  yield* all( 
    subtitle().position([-80, -450], 1),
    subtitle().text("LCD", 1),
    subtitle().fontSize(100, 1),
    dracula_lcd_().opacity(1, 3),
  )
  yield* waitUntil("CRT time");

  yield* all(
    subtitle().text("CRT", 1),
    dracula_lcd_().opacity(0, 2),
    dracula_crt_().opacity(1, 2),
  )

  yield* all(
    dracula_lcd_().opacity(1, 2),
    dracula_lcd_().position([-425, 100], 2),
    dracula_crt_().opacity(1, 2),
    dracula_crt_().position([440, 100], 2),
  )
  
  yield* waitUntil("CRT time finished");

});