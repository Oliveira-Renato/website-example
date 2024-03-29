import styled from 'styled-components';

export const Container = styled.div`
  .typewriter {
    padding: 0;
    display: flex;
    margin: 0;
}
.typewriter h2 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .58125rem solid ${props => props.theme.colors.baseColorAlt}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .58125rem; /* Adjust as needed */
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}
@media (max-width: 380px) {
  .typewriter h2 {
    letter-spacing: .3rem;
  }
}
/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 70% }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: ${props => props.theme.colors.baseColor}; }
}
@media (min-width: 912px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 92% }
  }
}
@media (min-width: 1024px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 76% }
  }
}
@media (min-width: 1280px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 60% }
  }
}
@media (min-width: 1400px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 88% }
  }
}
@media (min-width: 1400px) {
  @keyframes typing {
    from { width: 0 }
    to { width: 88% }
  }
}
`;