import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Direction, Reference, ThreadGenerator, all, beginSlide, chain, createRef, slideTransition, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {

  const grid = createRef<Grid>();
  const ref1 = createRef<Img>();
  const ref2 = createRef<Img>();
  const ref3 = createRef<Img>();
  const ref4 = createRef<Img>();
  const source1 = createRef<Txt>();
  const source2 = createRef<Txt>();
  const source3 = createRef<Txt>();
  const source4 = createRef<Txt>();


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
      <Img
        ref={ref4}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pixel_Art_Cat_with_Zoom-in_Detail.svg/1024px-Pixel_Art_Cat_with_Zoom-in_Detail.svg.png"
        radius={2}
        antialiased={false}
      />,
    </>,
  );
  

  yield* slideTransition(Direction.Right);

  yield* beginSlide('vocab')
});