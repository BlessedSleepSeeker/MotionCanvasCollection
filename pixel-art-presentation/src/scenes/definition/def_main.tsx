import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line, Rect, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, loop, slideTransition, waitFor} from '@motion-canvas/core';
import dolphin from "../../img/dolphin.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const text = createRef<Txt>();
  const img = createRef<Img>();
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
            ref={img}
            src={dolphin}
            height={700}
            position={[0, 50]}
            opacity={0} 
          />
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
  yield* beginSlide('medium')
  yield* all(
    title().opacity(0, 1),
    text().opacity(1, 1),
    text().text("Médium ou Courant Artistique ?", 2)
  )
  yield* beginSlide('how do you define')
  yield* all(
    title().opacity(0, 1),
    text().opacity(1, 1),
    text().text("Comment définir parfaitement le Pixel-Art ?", 2)
  )

  yield* beginSlide('pillars')
  yield* all(
    text().text("Les Deux Pilliers du Pixel-Art", 2),
    text().position([0, -425 ], 2),
  )
  yield* beginSlide('constraints')
  yield* all(
    text().text("Constraints Breeds Creativity", 2),
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


  yield* beginSlide('everypixel')
  yield* all(
    constraints().opacity(0, 1),
    text().text("Every Pixel Matter", 2),
    img().opacity(1, 2)
  )

  yield* beginSlide('pareidolia')
});