import React from 'react'
import { ScreenSubway480x360 } from './Screen480x360/Screen480x360';
import { ScreenSubaway600x360 } from './Screen600x360/Screen600x360';

export const App = () => {




   let widthScreen = window.screen.width; 
    let heightScreen = window.screen.height;



    return (

        <>
            <section>
                
      
               <ScreenSubaway600x360 />
             
            </section>
        </>
       
     
      )
    }

