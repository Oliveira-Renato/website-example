import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components";


export const Nav = styled.nav`
        position: fixed;
        width: 100%;
        /* background: linear-gradient(45deg, #FFF 33%, #202020 33.1%); */
        background-blend-mode: multiply;
        height: 90px;
        display: flex;
        justify-content: space-between;
        padding: 0 3rem;
        background: transparent;
        z-index: 10;     
        /* Third Nav */
        /* justify-content: flex-start; */
        
        
        .logo{
        opacity: 1;
        transform: translateZ(1);
        
          > img {   
            width: 100%;
            height: 65px;
            z-index: 1;
            image-rendering: optimizeQuality;

        }
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
        overflow: hidden;
        position:relative;
        z-index: 1;

        @media screen and (max-width:990px) {
            padding:1rem 2rem;
        }

        &:hover {
          color: #FFC40A;
        }
      
      }
        
        
    }
        
        .active {
            color: #15cdfc;
        }   
`;

export const Bars = styled(FaBars)`
          display: none;
          color: #333;
        @media screen and (max-width: 840px) {
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
        @media screen and (max-width: 840px) {
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
        @media screen and (max-width: 840px) {
            display: none;
        }
 `;

export const NavBtnLink = styled.a`
        border-radius: 4px;
        background: #1b87c8;
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
        background: #333;
        color: #FFF;
    }   
}
`;

