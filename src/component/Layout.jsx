import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

function Layout({ children }) {
    return (
        <Container>
            <Div>
                <SideBar />
            </Div>
            <View>
                {children}
            </View>
        </Container>
    )
}

export default Layout

const Container = styled.div`
 width: 100%;
 display: flex;
`

const Div = styled.div`
width: 15%;
height: 100vh;
border-right: 1px solid #EFF1F6;
padding: 1% 3%;
`
const View = styled.div`
width: 85%;
padding: 1% 3%;
`