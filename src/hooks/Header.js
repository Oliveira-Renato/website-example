import { useEffect } from "react";

export function HeaderEffect(){
    useEffect(()=>{
        const header = document.querySelector('#header');
        const navHeight = header.offsetHeight;

        window.addEventListener('scroll', function(){
            if(this.scrollY >= navHeight){
                header.classList.add('scroll')
            } else {
                header.classList.remove('scroll')
            }
        })
    })

    return (
        <div></div>
    )
}