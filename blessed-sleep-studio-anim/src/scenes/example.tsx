import {Img, Layout, Node, Rect, Txt, Video, makeScene2D} from '@motion-canvas/2d';
import {Vector2, all, createRef, easeInCubic, easeInOutCubic, easeInQuint, easeOutCubic, easeOutQuint, linear, sequence, tween, waitFor} from '@motion-canvas/core';

import logo from '../img/bsstudio.gif'

export default makeScene2D(function* (view) {

  const pic = createRef<Img>();
  const bss = createRef<Txt>();

  view.add(
    <Node cache>
        
        <Img ref={pic} position={[0, -300]} opacity={0} smoothing={false} src={logo} scale={3}></Img>
        <Txt ref={bss} position={[0, 300]} fontSize={100} fontFamily={'Sci-Bi'} fill={'fff'} >Blessed Sleep Studio</Txt>
    </Node>,
  );
  
  bss().moveOffset(new Vector2(-1, 0))
  yield* all(
    bss().text("", 0),
  )
  yield* all(
    pic().opacity(1, 2, easeInCubic),
    pic().position([0, -100], 2, easeOutCubic),
  )
  yield* all(
    bss().text("Blessed Sleep Studio", 1.5, linear),
    //bss().position([0, 400], 2, easeOutCubic),
  )
  yield* waitFor(1)

});
