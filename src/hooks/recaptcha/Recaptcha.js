import { useEffect } from "react"

export function Recaptcha(){
  
  function handleLoaded(e) {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6LdE-k4fAAAAAJqB_WFlftRnLmBrbOaGCOYhdQhR", { action:"homepage" })
        .then(token => {
          // ...
          console.log(token);
        })
    })
  }
  
  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=6LdE-k4fAAAAAJqB_WFlftRnLmBrbOaGCOYhdQhR"
    script.addEventListener("load", handleLoaded)
    document.body.appendChild(script)
  }, [])
  
  return (
    <div
      className="g-recaptcha"
      data-sitekey="6LdE-k4fAAAAAJqB_WFlftRnLmBrbOaGCOYhdQhR"
      data-size="invisible"
    ></div>
  )
}