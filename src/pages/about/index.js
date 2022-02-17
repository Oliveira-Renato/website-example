import React from 'react'

import mainImg from '../../images/homeImages/5802654.jpg'
import careDoctor from '../../images/homeImages/doctor-taking-care-senior-woman.jpg'

import '../../styles/about/styles.scss'

export function About(){
    return (
         <div>
           
             <section className="about" id="about">
                <div className="title black">
                    <h2>Sobre nós</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div> 

                
            <div className="container">
              <h2 className="main-title">Reveal Elements On Scroll</h2>
              <div className="content">
                <div className="image">
                  <img src="img1.jpg" alt="" />
                </div>
                <div className="text-box">
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
        
            </div>
          </section>

        </div>
    )
}