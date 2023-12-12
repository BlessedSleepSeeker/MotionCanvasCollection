import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line, Rect, Node} from '@motion-canvas/2d';
import {Direction, Reference, ThreadGenerator, all, beginSlide, chain, createRef, loop, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import dol1 from "../../img/epm/dol1.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const text = createRef<Txt>();

  const credits = createRef<Txt>();
  const pxdol1 = createRef<Img>();
  const px1 = createRef<Rect>();
  const px2 = createRef<Rect>();
  const px3 = createRef<Rect>();
  const px4 = createRef<Rect>();
  const px5 = createRef<Rect>();
  const px6 = createRef<Rect>();
  const px7 = createRef<Rect>();

  const line = createRef<Line>();
  const constraints = createRef<Node>();
  const palette = createRef<Layout>();

  const color1 = createRef<Rect>();
  const color2 = createRef<Rect>();
  const color3 = createRef<Rect>();
  const color4 = createRef<Rect>();
  const color5 = createRef<Rect>();
  const color6 = createRef<Rect>();
  const color7 = createRef<Rect>();
  const color8 = createRef<Rect>();

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
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} position={[5 , -40]} fontSize={200}>Definition</Txt>
        <Txt ref={text} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} position={[0, -20]} fontSize={100}></Txt>
        <Img
            ref={pxdol1}
            src={dol1}
            opacity={0} 
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px1}
            position={[-665, -105]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px2}
            position={[-105, -315]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px3}
            position={[35, -315]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px4}
            position={[735, -35]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px5}
            position={[735, 175]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px6}
            position={[35, 315]}
            opacity={0}
        />
        <Rect 
            width={70}
            height={70}
            fill={'000000'}
            ref={px7}
            position={[245, 315]}
            opacity={0} 
        />
        <Txt ref={credits} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} position={[0, 480]} fontSize={50} >
          Original Sprite by Frannek
        </Txt>
        <Node ref={constraints} opacity={0} >
        <Layout ref={palette} direction={'row'} alignItems={'center'} gap={0} position={[-400, 100]} layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            ref={color1}
            width={100}
            height={100}
            fill={'fdfdf8'}
          />
          <Rect 
            ref={color2}
            width={100}
            height={100}
            fill={'7b53ad'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'2d93dd'}
            ref={color3}
          />
          <Rect 
            width={100}
            height={100}
            fill={'e6da29'}
            ref={color4}
          />
        </Layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
        <Rect 
            width={100}
            height={100}
            fill={'1b1c33'}
            ref={color5}
        />
          <Rect 
            width={100}
            height={100}
            fill={'28c641'}
            ref={color6}
          />
          <Rect 
            width={100}
            height={100}
            fill={'d32734'}
            ref={color7}
          />
          <Rect 
            width={100}
            height={100}
            fill={'da7d22'}
            ref={color8}
          />
        </Layout>
        </Layout>
        <Line
        ref={line}
        stroke={'#FFF'}
        lineWidth={8}
        startArrow
        endArrow
        position={[300, -200]}
        opacity={1}
        points={[
          [0, 0],
          [0, 500],
          [500, 500],
        ]}
      />
      </Node>
    </>,
  );

  yield* slideTransition(Direction.Bottom);
  yield* waitUntil("def intro end")
  
  yield* all(
    title().opacity(0, 1),
    text().opacity(1, 1),
    text().text("Medium or Art Form ?", 1.5)
  )
  yield* waitUntil("medium end")
  
  yield* all(
    title().opacity(0, 1),
    text().opacity(1, 1),
    text().text("What is or isn't pixel-art ?", 1.5)
  )
  yield* waitUntil("define pixelart end")
  
  yield* all(
    text().text("The 2 Pillars of Pixel-Art", 2),
    text().position([0, -420], 2),
  )
  yield* waitUntil("pillars intro end")

  yield* all(
    text().text("Every Pixel Matter", 2),
    text().position([0, -440], 2),
    grid().spacing(70, 2),
    credits().opacity(1, 2),
  )
  yield* all(
    pxdol1().opacity(1, 2)
  )
  yield* waitUntil("example 1 end")
  yield* chain(
    blink_in(px1),
    blink_in(px5),
    blink_in(px7),
  )
  yield* waitUntil("example 2 end")
  yield* all(
    px1().opacity(0, 1),
    px5().opacity(0, 1),
    px7().opacity(0, 1),
  )
  yield* chain(
    blink_in(px3),
    blink_in(px4),
    blink_in(px5),
    blink_in(px7),
    blink_in(px6),
  )

  yield* waitUntil("everypixelmatter end")
  yield* all(
    grid().spacing(100, 2),
    text().position([0, -420], 2),
    text().text("Constraints Breeds Creativity", 2),
    pxdol1().opacity(0, 1),
    px1().opacity(0, 1),
    px2().opacity(0, 1),
    px3().opacity(0, 1),
    px4().opacity(0, 1),
    px5().opacity(0, 1),
    px6().opacity(0, 1),
    px7().opacity(0, 1),
    credits().opacity(0, 1),
  )
  
  yield* all(
    constraints().opacity(1, 2)
  )
  yield* loop(2,
    () => all(
      line().points([[0, 100],
        [0, 500],
        [300, 500]], 1).to([[0, 0],
            [0, 500],
            [500, 500]], 1),
        color1().opacity(0, 1).to(1, 1),
        color5().opacity(0, 1).to(1, 1),
        color4().opacity(0, 1).to(1, 1),
        color8().opacity(0, 1).to(1, 1),
        color2().fill("9bbc0f", 1).to("7b53ad", 1),
        color3().fill("306230", 1).to("2d93dd", 1),
        color6().fill("8bac0f", 1).to("28c641", 1),
        color7().fill("0f380f", 1).to("d32734", 1),
    )
  );

  yield* all(
      line().points([[0, 100],
        [0, 500],
        [300, 500]], 2),
      color1().opacity(0, 2),
      color5().opacity(0, 2),
      color4().opacity(0, 2),
      color8().opacity(0, 2),
      color2().fill("9bbc0f", 2),
      color3().fill("306230", 2),
      color6().fill("8bac0f", 2),
      color7().fill("0f380f", 2),
    )

    yield* waitUntil("constraint end")
});

function* blink_in(px: Reference<Rect>): ThreadGenerator {
  yield* chain (
    px().opacity(1, 0),
    px().fill("white", 0),
    px().fill("black", 1)
  )
}