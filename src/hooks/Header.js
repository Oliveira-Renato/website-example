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
            window.scrollY >= 570? backToTopIcon.classList.add('show') : console.log('no neeed to shsowwwwwwwwww');
        }

        function handleCloseMenu() {
            var navShow = document.querySelector('nav.show');
            var moonShow = document.querySelector('.darkIcon');

            $(document).width() >= 1015 && navShow ? navShow.classList.remove('show') : navShow = null;
            $(document).width() >= 1015 && moonShow ? moonShow.classList.remove('darkIcontoggle') : moonShow = null; 
        }

        window.addEventListener('scroll', function(){
            HandleHeaderEffect();
        })

        window.addEventListener('resize', function(event) {
            handleCloseMenu();
        }, true);
    })

    return null
}