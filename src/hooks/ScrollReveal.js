import { useEffect} from 'react';
import ScrollReveal from 'scrollreveal';

export default function ScrollReavelling(){
  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
    })
    
  //#testimonials .testimonials,
    scrollReveal.reveal(
      ` #home .text,
        #about .image, #about .text,
        #services header, #products .card,
        #testimonials header,  #testimonials .text,
        #contact .text, #contact .links,
        #footer .row, #products .img-container,
        #compliance .img-container, #lgpd .list-new-pattern .lgpd-img,
        #legislacao .legislacao-img
        `,
      { interval: 100 }
    )
  })

  return null
}