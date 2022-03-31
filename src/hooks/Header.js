import { useEffect } from "react";

export function HeaderEffect(){
    useEffect(()=>{
        const header = document.querySelector('#header');
        const navHeight = header.offsetHeight;
        const backToTopIcon = document.querySelector('.back-to-top');

        function HandleHeaderEffect() {

            if(window.scrollY >= navHeight){
                header.classList.add('scroll')
            } else {
                header.classList.remove('scroll')
            }
        }
        
        function HandleBackToTop() {

            if(window.scrollY >= 570){
                backToTopIcon.classList.add('show')
            } else {
                backToTopIcon.classList.remove('show')
            }
        }

        window.addEventListener('scroll', function(){
            HandleHeaderEffect()
            HandleBackToTop()
        })
    })

    return (
        <>
        </>
    )
}