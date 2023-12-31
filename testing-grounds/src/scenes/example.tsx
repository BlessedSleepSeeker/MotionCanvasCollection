import {makeScene2D, Circle, Grid, Txt, Layout, Img, Rect, Node} from '@motion-canvas/2d';
import {Direction, all, beginSlide, createRef, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import dracula_lcd from "../../img/dracula_lcd.jpg"
import dracula_crt from "../../img/dracula_crt.jpg"
import monster_lcd from "../../img/monster_lcd.png"
import monster_crt from "../../img/monster_crt.png"

export default makeScene2D(function* (view) {
  const rec = createRef<Rect>();

  view.add(
    <>
      <Layout direction={'column'} layout>
        <Rect fill={'#FFF'} size={[100, 100]} >
        
        </Rect>
        <Layout direction={'row'} layout>
          <Rect fill={'#FFF'} size={[100, 100]} >

          </Rect>
          <Rect ref={rec} fill={'#FFF'} size={[100, 100]} >

          </Rect>
          <Rect fill={'#FFF'} size={[100, 100]} >

          </Rect>
        </Layout>
        
        <Rect fill={'#FFF'} size={[100, 100]} >
        
        </Rect>
      </Layout>
      
    </>, 
  );

  
  
  yield* rec().margin([0, 10, 0, 0], 1)

});