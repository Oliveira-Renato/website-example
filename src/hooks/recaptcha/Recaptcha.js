import { useEffect } from "react"

export function Recaptcha(){
  
  function handleLoaded(e) {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LcxBlQfAAAAAMM2iVlQai_h2wk9r8H3pcsnK1_B", { action:"homepage" })
        .then(token => {
          // ...
  
        })
    })
  }
  
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=6LcxBlQfAAAAAMM2iVlQai_h2wk9r8H3pcsnK1_B"
    script.addEventListener("load", handleLoaded)
    document.body.appendChild(script)
  }, [])
  
  return (
    <div
      className="g-recaptcha"
      data-sitekey="6LcxBlQfAAAAAMM2iVlQai_h2wk9r8H3pcsnK1_B"
      data-size="invisible"
    ></div>
  )
}