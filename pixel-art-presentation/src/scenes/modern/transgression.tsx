import {makeScene2D, Circle, Grid, Txt, Layout, Img} from '@motion-canvas/2d';
import {Center, Direction, all, beginSlide, chain, createRef, slideTransition, waitFor} from '@motion-canvas/core';
import textmod from "../../img/modern/textmodquack.jpg"
import petscii from "../../img/PETSCII.png"

export default makeScene2D(function* (view) {
  const grid = createRef<Grid>();
  const title = createRef<Txt>();
  const title_lay = createRef<Layout>();
  const part_title = createRef<Txt>();
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
      <Layout ref={title_lay} position={[0, 40]} direction={'column'} alignItems={'center'} gap={0} layout>
        <Txt opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100} wrap={'wrap'}>Les règles sont faites pour être</Txt>
        <Txt opacity={1} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={100} wrap={'wrap'}>Transgressées</Txt>
        <Txt ref={title} opacity={0} fontFamily={'Sci-Bi'} fill="#FFF" antialiased={false} fontSize={50} wrap={'wrap'}>(valable uniquement dans l'art)</Txt>
      </Layout>
      <Txt ref={part_title} opacity={0} fontFamily={'Sci-Bi'} position={[0, -420]} fill="#FFF" antialiased={false} fontSize={100} wrap={'wrap'}>Text Art</Txt>
      <Img
        ref={img}
        src={textmod}
        position={[0, 0]}
        opacity={0} 
      />
    </>,
  );

  yield* slideTransition(Direction.Right);
  yield* waitFor(1)
  yield* title().opacity(1, 1)

  yield* beginSlide('text art')
  yield* title_lay().opacity(0 , 1),
  yield* all(
    part_title().opacity(1, 1),
    img().opacity(1, 1),
  )

  yield* beginSlide('voxel art')
  yield* all(
    part_title().text("Voxel Art", 1),
    img().opacity(0, 1),
  )
  yield* chain(
    img().src("https://pbblogassets.s3.amazonaws.com/uploads/2021/02/17193204/How-to-Create-3D-Voxel-Art-with-MagicaVoxel-Tutorial.jpg", 0),
    img().opacity(1, 1),
  )
  yield* beginSlide('conclusion')

});