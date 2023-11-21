import {Node, Rect, makeScene2D} from '@motion-canvas/2d';
import {all, createRef, sequence, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  const square1 = createRef<Rect>();
  const square2 = createRef<Rect>();
  const square3 = createRef<Rect>();
  const square4 = createRef<Rect>();
  const square5 = createRef<Rect>();
  const square6 = createRef<Rect>();

  view.add(
    <Node
     position={[-50, 100]}>
      <Rect
        ref={square1}
        size={[100, 0]}
        fill="#fff"
        position={[-250, -300]}
      />
      <Rect
        ref={square2}
        size={[100, 0]}
        fill="#fff"
        position={[-250, -200]}
      />
      <Rect
        ref={square3}
        size={[100, 0]}
        fill="#fff"
        position={[-250, -100]}
      />
      <Rect
        ref={square4}
        size={[100, 0]}
        fill="#fff"
        position={[-250, 0]}
      />
      <Rect
        ref={square5}
        size={[100, 0]}
        fill="#fff"
        position={[-250, 100]}
      />
      <Rect
        ref={square6}
        size={[100, 0]}
        fill="#fff"
        position={[-250, 200]}
      />
    </Node>,
  );
  yield* all(
    square1().offset([-1, 1], 0),
    square2().offset([-1, 1], 0),
    square3().offset([-1, 1], 0),
    square4().offset([-1, 1], 0),
    square5().offset([-1, 1], 0),
    square6().offset([-1, 1], 0),
  )
  yield* sequence(
    0.1,
    square6().size([100, 100], 0.5),
    square5().size([100, 100], 0.5),
    square4().size([100, 100], 0.5),
    square3().size([100, 100], 0.5),
    square2().size([100, 100], 0.5),
    square1().size([100, 100], 0.5),
  )
  yield* all(
    square1().size([600, 100], 2),
    square2().position([250, -200], 2),
    square3().position([150, -100], 2),
    square4().position([50, 0], 2),
    square5().position([-50, 100], 2),
    square6().size([200, 100], 2),
  )
  waitFor(0.5)

  // end
  yield* sequence(
    0.1,
    square1().size([600, 0], 0.5),
    square2().size([100, 0], 0.5),
    square3().size([100, 0], 0.5),
    square4().size([100, 0], 0.5),
    square5().size([100, 0], 0.5),
    square6().size([200, 0], 0.5),
  )
});
