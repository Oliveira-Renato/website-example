import { useEffect } from "react"

export function Recaptcha(){
  
  function handleLoaded(e) {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LfHLMgkAAAAAODSzcsECltTcZR7XM-ei50NA7ez", { action:"homepage" })
        .then(token => {
          // ...
        })
    })
  }
  
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=6LfHLMgkAAAAAODSzcsECltTcZR7XM-ei50NA7ez"
    script.addEventListener("load", handleLoaded)
    document.body.appendChild(script)
  }, [])
  
  return (
    <div
      className="g-recaptcha"
      data-sitekey="6LfHLMgkAAAAAODSzcsECltTcZR7XM-ei50NA7ez"
      data-size="invisible"
    ></div>
  )
}