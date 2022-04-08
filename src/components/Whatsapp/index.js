import React from "react";

import './styles.scss';
import whatsappImg from '../../assets/images/whatsapp/pngwing.com.png';
export function Whatsapp() {
    return (
        <div>
            <div className="whatsapp">
                <a target="_blank" href="https://api.whatsapp.com/" data-aos="zoom-in" data-aos-delay="200">
                    <div className="whats-img">
                        <img src={whatsappImg} alt="" />
                    </div>
                </a>

            </div>
            
        </div>
    )
}
