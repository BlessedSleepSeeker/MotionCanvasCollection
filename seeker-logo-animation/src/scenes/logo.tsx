import {Img, Node, Rect, makeScene2D} from '@motion-canvas/2d';
import {Vector2, all, createRef, easeInSine, sequence, tween, waitFor} from '@motion-canvas/core';
import sleepoof from '../img/RealSleepoof.png'
import insect from '../img/readyforbattle1000.png'
import dog from '../img/doggo.png'

export default makeScene2D(function* (view) {
  const square1 = createRef<Rect>();
  const square2 = createRef<Rect>();
  const square3 = createRef<Rect>();
  const square4 = createRef<Rect>();
  const square5 = createRef<Rect>();
  const square6 = createRef<Rect>();

  // Composite Operations
  const ImageSource = dog
  const maskRef = createRef<Node>();
  const valueRef = createRef<Img>();

  view.add(
    <Node cache>
      
      <Node
        ref={maskRef}
        position={[-50, 100]}
        >
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
      </Node>
      {/*<Img ref={valueRef} src={ImageSource} size={[900, 900]} compositeOperation={'source-in'}/>*/}
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
  //changeOffset(new Vector2(-1, 1))
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
    // tween(0.5, value => {square1().size(Vector2.lerp(new Vector2(100, 100), new Vector2(600, 100), easeInSine(value),))}),
    // tween(0.5, value => {square2().position(Vector2.lerp(new Vector2(-250, -200), new Vector2(250, -200), easeInSine(value),))}),
    // tween(0.5, value => {square3().position(Vector2.lerp(new Vector2(-250, -100), new Vector2(150, -100), easeInSine(value),))}),
    // tween(0.5, value => {square4().position(Vector2.lerp(new Vector2(-250, 0), new Vector2(50, 0), easeInSine(value),))}),
    // tween(0.5, value => {square5().position(Vector2.lerp(new Vector2(-250, 100), new Vector2(-50, 100), easeInSine(value),))}),
    // tween(0.5, value => {square6().size(Vector2.lerp(new Vector2(100, 100), new Vector2(200, 100), easeInSine(value),))}),
    square1().size([600, 100], 0.5),
    square2().position([250, -200], 0.5),
    square3().position([150, -100], 0.5),
    square4().position([50, 0], 0.5),
    square5().position([-50, 100], 0.5),
    square6().size([200, 100], 0.5),
  )
  
  yield* waitFor(1)
  changeOffset(new Vector2(1, 1))

  yield* all(
    square1().size([100, 100], 0.5),
    square2().position([350, -200], 0.5),
    square3().position([350, -100], 0.5),
    square4().position([350, 0], 0.5),
    square5().position([350, 100], 0.5),
    square6().size([100, 100], 0.5),
    square6().position([350, 200], 0.5),
  )
  // end
  yield* sequence(
    0.1,
    square1().size([100, 0], 0.5),
    square2().size([100, 0], 0.5),
    square3().size([100, 0], 0.5),
    square4().size([100, 0], 0.5),
    square5().size([100, 0], 0.5),
    square6().size([100, 0], 0.5),
  )

  function changeOffset(new_offset: Vector2) {
    square1().moveOffset(new_offset);
    square2().moveOffset(new_offset);
    square3().moveOffset(new_offset);
    square4().moveOffset(new_offset);
    square5().moveOffset(new_offset);
    square6().moveOffset(new_offset);
  }
});
