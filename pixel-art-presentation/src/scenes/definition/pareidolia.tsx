import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';
import smile from "../../img/smile.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const subtitle = createRef<Txt>();
  const img = createRef<Img>();

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
        <Txt ref={title} opacity={1} fontFamily={'Sci-Bi'} position={[0, -425]} fill="#FFF" antialiased={false} fontSize={100}>Paréïdolie</Txt>
        <Img
            ref={img}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA.jpg/1280px-%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BE-%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA.jpg"}
            height={600}
            position={[-450, 0]}
            opacity={1}
          />
          <Img
            ref={img}
            src={smile}
            position={[450, 50]}
            opacity={1}
          />
    </>, 
  );

  yield* slideTransition(Direction.Right);

  yield* beginSlide('technology')
  
});