import React, { useEffect }  from "react";

import $ from 'jquery';



const NavChangeColor = () => {

  useEffect(()=>{

    $(function() {
      $(window).on("scroll", function() {

        if ($(window).scrollTop() > 25) {
          $("nav").addClass("fixed-menu");
        } else {
          $("nav").removeClass("fixed-menu");
        }

      })
      
    });

  })

  return (
    <div></div>
  )

}
export default NavChangeColor;