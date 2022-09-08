import React from 'react'
import styled from 'styled-components'
import { Size } from '../utils/constant/size'
import { Color } from '../utils/constant/color'
import ChartComponent from "../component/Chart"

function Dashboard() {


    const Data = [
        "1 Day",
        "3 Days",
        "7 Days",
        "30 Days",
        "All Time",
        "Custom Date"
    ]

    return (
        <Container>
            <Header>Dashboard</Header>
            <Text>Good morning, Blessing ⛅️</Text>
            <Text2>Check out your dashboard summary.</Text2>

            <View>
                {
                    Data?.map((item, i) => {
                        return <Div key={i}>
                            <Text3>{item}</Text3>
                        </Div>
                    })
                }
            </View>

            <MenuDiv>
                <ChartComponent type={'line'} />
            </MenuDiv>

            <CardDiv>
                <Card>
                    <RowBtw>
                        <Text>Top Locations</Text>
                        <Text>View full reports</Text>
                    </RowBtw>
                </Card>
                <Card>
                    <RowBtw>
                        <Text>Top Locations</Text>
                        <Text>View full reports</Text>
                    </RowBtw>
                </Card>
            </CardDiv>
        </Container>
    )
}

export default Dashboard

const Container = styled.div`

`

const Header = styled.h1`
    font-size: ${Size.medium}
`

const Text = styled.h3`
    font-size: ${Size.small}
`
const Text2 = styled.p`
    font-size: ${Size.extraSmall};
    color: ${Color.primary};
`
const Text3 = styled.p`
    font-size: ${Size.extraSmall};
    // color: ${Color.primary};
    font-weight: bold;
`

const View = styled.div`
    display: flex;
`

const Div = styled.div`
background: #FFFFFF;
border: 1px solid #EFF1F6;
border-radius: 100px;
padding: 0px 10px;
margin: 0px 5px;
`
const MenuDiv = styled.div`
 height: 400px;
`

const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #EFF1F6;
    border-radius: 12px;
    width: 47%;
    padding: 10px;
`

const CardDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2%;

`

const RowBtw = styled.div`
    display: flex;
    justify-content: space-between;

`