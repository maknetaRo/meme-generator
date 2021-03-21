import React from 'react'
import styled from 'styled-components'
import { StyledList, StyledListElem } from './modules/ListStyle';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #351F39;   
`;



const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledList>
                <StyledListElem>Meme Generator</StyledListElem>
            </StyledList>

        </StyledNavbar>
    )
}

export default Navbar;
