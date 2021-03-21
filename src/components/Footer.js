import React from 'react';
import styled from 'styled-components'
import { StyledList, StyledListElem } from './modules/ListStyle';

const StyledFooter = styled.footer`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 height: 80px;
 background-color: #351F39;  
`;

const StyledLink = styled.a`
    color: #A0C1B8;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledList>
                <StyledListElem>Made with <span>&hearts;</span> by <StyledLink href="https://github.com/maknetaRo" target="_blank">Magdalena Rosłaniec</StyledLink> </StyledListElem>
                <StyledListElem>using <StyledLink href="https://reactjs.org/docs/getting-started.html" target="_blank">React</StyledLink></StyledListElem>
                <StyledListElem>and <StyledLink href="https://imgflip.com/api" target="_blank">imgflip API</StyledLink></StyledListElem>
            </StyledList>
        </StyledFooter>
    )
}

export default Footer;