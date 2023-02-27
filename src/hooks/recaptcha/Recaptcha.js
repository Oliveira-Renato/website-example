import { useEffect } from "react"

export function Recaptcha(){
  
  function handleLoaded(e) {
    e.preventDefault();
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute("6Lf8VrskAAAAACuls7DRZt3QWmikcdVgr7zjDrrk", { action:"homepage" })
        .then(token => {
          // ...
        })
    })
  }
  
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=6Lf8VrskAAAAACuls7DRZt3QWmikcdVgr7zjDrrk"
    script.addEventListener("load", handleLoaded)
    document.body.appendChild(script)
  }, [])
  
  return (
    <div
      className="g-recaptcha"
      data-sitekey="6Lf8VrskAAAAACuls7DRZt3QWmikcdVgr7zjDrrk"
      data-size="invisible"
    ></div>
  )
}