import { useEffect } from 'react'
import {Container} from './styles.js'

export function ProgressBar(){
  useEffect(()=>{ 
    function HandleScrollBar(){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    window.onscroll = function() { HandleScrollBar() };
  })

  return(
    <div>
      <Container>
      <div className="aaa">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>  
      </div>
      </Container>
    </div>
  )
}