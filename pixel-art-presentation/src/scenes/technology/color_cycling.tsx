import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, loop, slideTransition} from '@motion-canvas/core';
import bleeding from "../../img/bleeding.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();
  const img = createRef<Img>();
  const line = createRef<Line>();
  const paletteLine = createRef<Line>();
  const explaination = createRef<Node>();
  const color1 = createRef<Rect>();
  const color2 = createRef<Rect>();
  const color3 = createRef<Rect>();
  const color4 = createRef<Rect>();

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
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} position={[0, -425]} fill="#FFF" antialiased={false} fontSize={100}>Color Cycling</Txt>
        <Img
            ref={img}
            src={"https://miro.medium.com/v2/resize:fit:640/1*F1_GUG4BhZ1cd0miUWD2ZA.gif"}
            height={600}
            position={[500, 0]}
            opacity={1}
        />
        <Node ref={explaination} opacity={0}>
        <Layout position={[-850, 0]} direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            width={100}
            height={100}
            fill={'95c5ac'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'69809e'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'4c5c87'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'443f7b'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'3f2c5f'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'2a173b'}
          />
        </Layout>
        <Layout position={[-550, 0]} direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect
            ref={color1}
            width={100}
            height={100}
            fill={'95c5ac'}
          />
          <Rect 
          ref={color2}
            width={100}
            height={100}
            fill={'69809e'}
          />
          <Rect 
          ref={color3}
            width={100}
            height={100}
            fill={'4c5c87'}
          />
          <Rect 
          ref={color4}
            width={100}
            height={100}
            fill={'443f7b'}
          />
        </Layout>
        <Txt position={[-550, -140]} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50}>1</Txt>
        <Txt position={[-550, -40]} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50}>2</Txt>
        <Txt position={[-550, 60]} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50}>3</Txt>
        <Txt position={[-550, 160]} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50}>4</Txt>
        <Line
          ref={line}
          stroke={'#FFF'}
          lineWidth={8}
          endArrow
          position={[-400, 0]}
          opacity={1}
          points={[
            [0, 0],
            [150, 0],
          ]}
        />
        <Txt position={[-175, 0]} opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50}>???</Txt>
        <Line
          ref={line}
          stroke={'#FFF'}
          lineWidth={8}
          endArrow
          position={[-400, 0]}
          opacity={1}
          points={[
            [300, 0],
            [450, 0],
          ]}
        />
        <Line
          ref={paletteLine}
          stroke={'#FFF'}
          lineWidth={8}
          endArrow
          position={[-620, -150]}
          opacity={1}
          points={[
            [0, 0],
            [-160, -100],
          ]}
        />
        </Node>
    </>, 
  );

  yield* slideTransition(Direction.Right);
  
  yield* all(
    title().text("Palette Swapping", 1).to("Color Cycling", 1),
    explaination().opacity(1, 2),
  )
  yield* beginSlide('Palette Swap')
  //
  //cryptic ocean palette
  yield* loop(2, () => all(
    paletteLine().points([
      [0, 0],
      [-160, 0],
      ], 0.5).to([
      [0, 0],
      [-160, 100],
      ], 0.5).to([
      [0, 0],
      [-160, 200],
      ], 0.5)
      .to([
      [0, 0],
      [-160, 300],
      ], 0.5).to([
      [0, 0],
      [-160, 400],
      ], 0.5).to([
      [0, 0],
      [-160, -100],
      ], 0.5),
      color1().fill("69809e", 0.5).to("4c5c87", 0.5).to("443f7b", 0.5).to("3f2c5f", 0.5).to("2a173b", 0.5).to("95c5ac", 0.5),
  ))
  
  yield* beginSlide('Palette Swap full')

  yield* loop(4, () => all(
    
    paletteLine().points([
      [0, 0],
      [-160, 0],
      ], 0.5).to([
      [0, 0],
      [-160, 100],
      ], 0.5).to([
      [0, 0],
      [-160, 200],
      ], 0.5)
      .to([
      [0, 0],
      [-160, 300],
      ], 0.5).to([
      [0, 0],
      [-160, 400],
      ], 0.5).to([
      [0, 0],
      [-160, -100],
      ], 0.5),
      color1().fill("69809e", 0.5).to("4c5c87", 0.5).to("443f7b", 0.5).to("3f2c5f", 0.5).to("2a173b", 0.5).to("95c5ac", 0.5),
      color2().fill("4c5c87", 0.5).to("443f7b", 0.5).to("3f2c5f", 0.5).to("2a173b", 0.5).to("95c5ac", 0.5).to("69809e", 0.5),
      color3().fill("443f7b", 0.5).to("3f2c5f", 0.5).to("2a173b", 0.5).to("95c5ac", 0.5).to("69809e", 0.5).to("4c5c87", 0.5),
      color4().fill("3f2c5f", 0.5).to("2a173b", 0.5).to("95c5ac", 0.5).to("69809e", 0.5).to("4c5c87", 0.5).to("443f7b", 0.5),
  ))

});