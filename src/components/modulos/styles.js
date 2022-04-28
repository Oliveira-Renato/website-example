
import styled from 'styled-components';

export const SacolaDO = styled.div`

section .container header .button2 {
	 font-size: 2.2rem !important;	
	 color: #333;
	 position: absolute;
	 padding: 16px 36px;
	 background: #333;
	 border-radius: 4px;
	 transition: all 0.5s;
	 border: none;
}
 .button2 span {
	 cursor: pointer;
	 display: inline-block;
	 position: relative;
	 transition: 0.5s;
}
 .next span:after {
	 content: '\00bb';
	 position: absolute;
	 opacity: 0;
	 top: 0;
	 right: -20px;
	 transition: 0.5s;
}
 .next:hover span {
	 padding-right: 25px;
}
 .next:hover span:after {
	 opacity: 1;
	 right: 0;
}
 .prev span:after {
	 content: '\00ab';
	 position: absolute;
	 opacity: 0;
	 top: 0;
	 left: -20px;
	 transition: 0.5s;
}
 .prev:hover span {
	 padding-left: 25px;
}
 .prev:hover span:after {
	 opacity: 1;
	 left: 0;
}
 .next {
	 right: 5rem;
}
 .prev {
	 left: 5rem;
}
 

`;

