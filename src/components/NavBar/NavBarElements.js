import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components";


export const Nav = styled.nav`
        position: fixed;
        width: 100%;
        background: linear-gradient(125deg, #FFF 33%, #202020 33.1%);
        background-blend-mode: multiply;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 2000px) / 2);
        background: linear-gradient(70deg, #FFF 20%, #FFC40A   20.1%);
        z-index: 10;
        /* Third Nav */
        /* justify-content: flex-start; */


        .img-logo{           
            

            > img {
                max-width: 100%;
                z-index: 1000;
                image-rendering: optimizeQuality;
            }
        }

        @media screen and (max-width: 1200px) {
            
        }
        `;

    export const Anchor = styled.a`
        transition: smooth;
        color: #333;
        font-weight: 700;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 2rem 3rem;
        height: 100%;
        cursor: pointer;
        
        &.active {
            color: #15cdfc;
        }   
        `;

        export const Bars = styled(FaBars)`
        display: none;
        color: #fff;
        @media screen and (max-width: 768px) {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-100%, 75%);
            font-size: 1.8rem;
            cursor: pointer;
        }

        `;

        export const NavMenu = styled.div`
        display: flex;
        align-items: center;
        margin-right: -16px;
        /* Second Nav */
        /* margin-right: 24px; */
        /* Third Nav */
        /* width: 100vw;
        white-space: nowrap; */
        @media screen and (max-width: 768px) {
            display: none;
        }
        `;

        export const NavBtn = styled.nav`
        display: flex;
        align-items: center;
        margin-right: 24px;
        /* Third Nav */
        /* justify-content: flex-end;
        width: 100vw; */
        @media screen and (max-width: 768px) {
            display: none;
        }
        `;

        export const NavBtnLink = styled.a`
        border-radius: 4px;
        background: #256ce1;
        padding: 10px 22px;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        /* Second Nav */
        margin-left: 24px;
        &:hover {
            transition: all 0.2s ease-in-out;
            background: #fff;
            color: #010606;
        }  
`;

