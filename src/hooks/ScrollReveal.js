import { useEffect} from 'react'

import ScrollReveal from 'scrollreveal'

export default function ScrollReavelling(){

  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '20px',
      duration: 700,
      reset: true
    })
  //#testimonials .testimonials,
    scrollReveal.reveal(
      ` #about .image_about, #about .text,
      #services header, #products .card,
      #testimonials header, 
      #contact .text, #contact .links,
      #footer .row
      `,
      { interval: 100 }
    )
  })

  return null
}