import { useEffect } from 'react'
import './styles.scss'

export function ProgressBar(){
  useEffect(()=>{
    window.onscroll = function() {HandleScrollBar()};

    function HandleScrollBar(){
      
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  })

  return(
    <div>
      <div class="header">
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>  
      </div>
    </div>
  )
}