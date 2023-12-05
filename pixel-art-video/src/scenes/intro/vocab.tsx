import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line, Node, CubicBezier} from '@motion-canvas/2d';
import {Direction, all, beginSlide, chain, createRef, loop, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import sword5x5 from '../../img/sword5x5.png'
import sword5x5_colored from '../../img/sword5x5_colored.png'

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  
  const canvasNode = createRef<Node>();
  const pixel = createRef<Rect>();
  
  const line = createRef<Line>();
  const height = createRef<Txt>();
  const width = createRef<Txt>();
  
  const sprite = createRef<Img>();
  
  const paletteNode = createRef<Node>();

  const arrow1 = createRef<Line>();
  const arrow2 = createRef<Line>();
  const arrowsNode = createRef<Node>();

  view.add(
    <>
      <Grid
        ref={grid}
        height={'100%'}
        width={'100%'}
        stroke={'#666'}
        strokeFirst={true}
        fill={'#FFFFFF'}
        spacing={30}
        start={1}
        end={0}
      />
      <Txt ref={title} opacity={1} position={[0, -420]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}></Txt>
      <Node ref={canvasNode}>
        <Txt ref={height} opacity={0} position={[-350, -35]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}>5</Txt>
        <Txt ref={width} opacity={0} position={[-50, 265]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={70}>5</Txt>
        <Rect
          ref={pixel}
          height={1}
          width={1}
          position={[-50, 50]}
          fill={'#FFFFFF'}
          opacity={0}
        />
        <Line
          ref={line}
          position={[-300, -300]}
          stroke={'#FFF'}
          lineWidth={8}
          startArrow
          endArrow
          opacity={0}
          points={[
            [0, 0],
            [0, 500],
            [500, 500],
          ]}
        />
        <Img
          ref={sprite}
          src={sword5x5}
          position={[-50, -50]}
          opacity={0}
        />
      </Node>
      <Node ref={arrowsNode}>
        <Line
          position={[-200, -50]}
          ref={arrow1}
          lineWidth={6}
          stroke={'lightseagreen'}
          points={[
            [0, 0],
            [400, 0],
          ]}
          endArrow
          radius={10}
          end={0}
        />,
        <Line
          position={[200, 50]}
          ref={arrow2}
          lineWidth={6}
          stroke={'lightseagreen'}
          points={[
            [0, 0],
            [-400, 0],
          ]}
          endArrow
          radius={10}
          end={0}
        />,
      </Node>
      <Node ref={paletteNode} position={[-400, 0]} opacity={0}>
      <Layout direction={'row'} alignItems={'center'} gap={0} layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
          <Rect 
            width={100}
            height={100}
            fill={'fdfdf8'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'7b53ad'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'2d93dd'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'e6da29'}
          />
        </Layout>
        <Layout direction={'column'} alignItems={'center'} gap={0} layout>
        <Rect 
            width={100}
            height={100}
            fill={'1b1c33'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'28c641'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'d32734'}
          />
          <Rect 
            width={100}
            height={100}
            fill={'da7d22'}
          />
        </Layout>
        </Layout>
      </Node>
    </>,
  );

  yield* slideTransition(Direction.Right);
  yield* waitFor(1)
  yield* all(
    grid().spacing(100, 3),
  );
  yield* all(
    pixel().opacity(1, 1),
    pixel().size([100,100], 1),
    title().text("Pixel", 0.5)
  );

  yield* waitUntil("pixel_color")
  yield* pixel().fill("1b1c33", 1).to("7b53ad", 1).to("28c641", 1).to("2d93dd", 1).to("e6da29", 1).to("d32734", 1).to("da7d22", 1).to("fdfdf8", 1);

  yield* waitUntil("pixel end")
  yield* all(
    pixel().opacity(0.3, 1),
  );
  yield* all(
    title().text("Canvas", 0.5),
    line().opacity(1, 1),
    height().opacity(1, 1),
    width().opacity(1, 1),
  );
  
  yield* waitUntil("canvas size")
  
  yield* all(
    chain(
      line().points([[0, 100],
        [0, 500],
        [500, 500]], 1),
      line().points([[0, -100],
        [0, 500],
        [300, 500]], 1),
      line().points([[0, 0],
        [0, 500],
        [500, 500]], 1)
    ),
    chain(
      height().text("4", 0.3),
      waitFor(0.7),
      all(
        height().text("8", 0.3),
        width().text("3", 0.3),
        waitFor(0.7),
      ),
      all(
        height().text("5", 0.7),
        width().text("5", 0.7),
        waitFor(0.3),
      ),
    )
  )
  

  yield* waitUntil("canvas end")

  yield* all(
    pixel().opacity(0, 1),
    sprite().opacity(1, 2),
    title().text("Sprite", 0.5)
  )
  
  yield* waitUntil("sprite end")
  yield* all(
    sprite().opacity(0, 1.5),
    height().opacity(0, 1.5),
    width().opacity(0, 1.5),
    canvasNode().opacity(0.3, 1.5),
    canvasNode().position([600, 0], 1.5),
  )

  yield* all(
    sprite().src(sword5x5_colored, 0),
    sprite().opacity(1, 1),
    title().text("Palette", 0.5),
    paletteNode().opacity(1, 1),
  )

  yield* waitUntil("palette sprite")

  yield* loop(4, () => chain(
      arrow1().end(1, 0.5),
      arrow1().start(1, 0.5),
      arrow2().end(1, 0.5),
      arrow2().start(1, 0.5),
  ))

  yield* waitUntil("palette end")
  


});