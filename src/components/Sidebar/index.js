import React from 'react'
import {SidebarContainer,
            Icon,
            CloseIcon,
            SidebarMenu,
            SidebarLink,
            SidebarRoute,
            SideBtnWrap
        } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='./'>Pizzas</SidebarLink>
                <SidebarLink to='./'>Sobremesas</SidebarLink>
                <SidebarLink to='./'>Contatos</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='./'>Pedir Agora</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
