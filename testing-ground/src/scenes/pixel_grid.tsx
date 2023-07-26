import {Layout, makeScene2D, Rect} from '@motion-canvas/2d';
import {all, createRef, createRefArray, makeRef, range, Reference} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  var gapSize = 5
  var rectSize = 40
  var rowNbr = 5
  var columnsNbr = 5
  var layoutWidth = (rectSize * columnsNbr) + (gapSize * (columnsNbr - 1))
  //const myGrid = createRef<Layout>();
  const row = createRefArray<Layout>()
  const column = createRef<Layout>()
  const pixels = createRefArray<Rect>()
  
  view.add(
    <Layout direction={'column'} width={layoutWidth} gap={gapSize} ref={column} layout>
      {range(rowNbr).map(index => (
        <Layout direction={'row'} height={rectSize} gap={gapSize} ref={row} layout>
          {range(columnsNbr).map(index2 => (
            <Rect
            size={rectSize}
            fill="#FFFFFF"
            ref={pixels}
          />
          ))}
        </Layout>
      ))}
    </Layout> 
  );

  yield* all(
    column().gap(0, 1).to(5, 1),
    ...row.map(layout => layout.gap(0, 1).to(5, 1)),
    //...pixels.map(rect => rect.size(50, 1).to(30, 1)),
  );
});