import {makeScene2D, Circle, Grid, Txt, Layout, Img, Line} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition} from '@motion-canvas/core';
import hld from '../../img/hyperlightdrifter.png'

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const img1 = createRef<Img>();
  const img2 = createRef<Img>();
  const img3 = createRef<Img>();
  const img4 = createRef<Img>();
  const img5 = createRef<Img>();
  
  const date = createRef<Txt>();

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
      <Txt opacity={1} position={[0, -450]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}>Histoire</Txt>
      <Txt ref={date} opacity={1} position={[0, 475]} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100}>Préhistoire - Années 60</Txt>
          <Img
            ref={img1}
            src={"https://upload.wikimedia.org/wikipedia/commons/1/17/Rogue_Screen_Shot_CAR.PNG"}
            width={1200}
            height={800}
            position={[0, 0]}
          />
          <Img
            ref={img2}
            src={"https://1.bp.blogspot.com/-J58XTSgOhCg/XyAnO-pA2xI/AAAAAAAAowA/xmVnd3VofV8d6zgq2CWkhXUQPbZNoF2WQCLcBGAsYHQ/s1600/image1.png"}
            width={800}
            height={800}
            position={[0, 0]}
            opacity={0}
          />
          <Img
            ref={img3}
            src={"https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg"}
            width={800}
            height={800}
            position={[0, 0]}
            opacity={0}
          />
          <Img
            ref={img4}
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Fez_%28video_game%29_screenshot_07.png/1920px-Fez_%28video_game%29_screenshot_07.png"}
            width={1200}
            height={800}
            position={[0, 0]}
            opacity={0}
          />
          <Img
            ref={img5}
            src={hld}
            width={1200}
            height={800}
            position={[0, 0]}
            opacity={0}
          />
      
    </>,
  );
  yield* slideTransition(Direction.Right);
  
  yield* beginSlide('golden age')
  yield* all(
    img1().opacity(0, 1),
    img2().opacity(1, 1),
    date().text("Age d'Or - Fin Années 60 > Début 90", 1)
  )

  yield* beginSlide('dark times')
  yield* all(
    img2().opacity(0, 1),
    img3().opacity(1, 1),
    date().text("Age Sombre - Milieu 90 > 2005~", 1)
  )
  
  yield* beginSlide('renaissance')
  yield* all(
    img3().opacity(0, 1),
    img4().opacity(1, 1),
    date().text("Renaissance - 2005 à 2012", 1)
  )
 
  yield* beginSlide('modern')
  yield* all(
    img4().opacity(0, 1), 
    img5().opacity(1, 1),
    date().text("Contemporain - 2012 à Aujourd'hui", 1)
  )

  yield* beginSlide('definition')
});