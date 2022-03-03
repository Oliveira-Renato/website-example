import { useEffect} from 'react'

import ScrollReveal from 'scrollreveal'

export function ScrollReavelling(){

  useEffect(() => {
    const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
    })
  
    scrollReveal.reveal(
      `#home .image, #home .text,
      #about .image, #about .text,
      #services header, #products .card,
      #testimonials header, #testimonials .testimonials,
      #contact .text, #contact .links,
      #footer .container .row .footer-col
      `,
      { interval: 100 }
    )
  })

  return (
    <div></div>
  )
}