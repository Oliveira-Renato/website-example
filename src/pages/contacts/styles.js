import styled from 'styled-components';

export const ContainerContacts = styled.div`

#form .button {
	 border: none;
	 padding: 0 3.2rem;
	 height: 4.8rem;
	 margin-left: 1rem;
	 margin-top: 2.2rem;
}
 .contactForm {
	 width: 100%;
}
 @media (min-width: 43.5em) {
	 .contactForm {
		 position: relative;
		 width: 700px;
	}
}
 .contactForm .row {
	 width: 100%;
	 display: flex;
}
 @media (max-width: 43.5em) {
	 .contactForm .row {
		 width: 100%;
		 display: flex;
		 flex-wrap: wrap;
	}
}
 .contactForm .row .col50 {
	 width: 100%;
	 margin: 1rem 1rem 1rem 0;
}
 .contactForm .row .col100 {
	 width: 100%;
	 margin: 1rem 1rem 1rem 0;
	 text-align: center;
}
 .contactForm .row input, .contactForm .row textarea {
	 font: 400 1.6rem 'Poppins', sans-serif;
	 width: 100%;
	 padding: 1rem;
	 border: none;
	 outline: none;
	 border: 1px solid rgba(0, 0, 0, 0.08);
	 border-radius: 0.25rem;
	 color: var(--text-color);
	 background: white;
	 resize: none;
	 box-shadow: 0px 1px 4px var(--base-color-second);
	 text-align: left;
}
 .contactForm .row textarea {
	 margin-left: 5px;
	 height: 100px;
}
 .contactForm .row textarea::placeholder {
	 opacity: 0.5;
}
 .send {
	 display: flex;
	 justify-content: center;
}
 
`;