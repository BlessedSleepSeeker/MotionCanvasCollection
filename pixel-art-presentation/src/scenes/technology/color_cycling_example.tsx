import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Line, Node, Video} from '@motion-canvas/2d';
import {Direction, all, beginSlide, cancel, chain, createRef, loop, slideTransition, waitFor} from '@motion-canvas/core';
import color_cycle from "../../img/colorcycling2.webm"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const color_cycling_vid = createRef<Video>();

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
      <Video ref={color_cycling_vid} src={color_cycle} opacity={1} height={800} position={[0, 50]} loop/>
        
    </>, 
  );

  yield* slideTransition(Direction.Right);
  
  yield* all(
    title().text("An Example by Mark Ferrari from 1994-1996", 1),
  )

  yield* beginSlide('Example')
  color_cycling_vid().play();
  
  
  yield* waitFor(5)
  
  yield* beginSlide('Modern')
});