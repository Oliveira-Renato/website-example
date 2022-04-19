import { useEffect } from "react";
import $ from 'jquery';

export function HeaderEffect(){
    useEffect(()=>{
        const header = document.querySelector('#header');
        const navHeight = header.offsetHeight;
        const backToTopIcon = document.querySelector('.back-to-top');
        
        function HandleHeaderEffect() {
            window.scrollY >= navHeight? header.classList.add('scroll') : header.classList.remove('scroll');
        }
        
        function HandleBackToTop() {
            window.scrollY >= 570? backToTopIcon.classList.add('show') : console.log('no neeed to showwwwwwwwww');
        }

        function handleCloseMenu() {
            const navShow = document.querySelector('nav.show');
            const moonShow = document.querySelector('.darkIcon') && document.querySelector('.darkIcon') ;

            $(document).width() >= 1030 && navShow ? navShow.classList.remove('show') : console.log('foda');
            $(document).width() >= 1030 && moonShow ? moonShow.classList.remove('darkIcontoggle') : console.log('fodinha'); 
        }

        window.addEventListener('scroll', function(){
            HandleHeaderEffect();
        })

        window.addEventListener('resize', function(event) {
            handleCloseMenu();
        }, true);
    })

    return (
        <></>
    )
}