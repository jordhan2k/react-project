import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { color } from '../../utils/constants';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import img from '../../assets/images/avatar.jpg';
import { Link,  useLocation } from 'react-router-dom';
import routeData from '../../utils/routeData';

const Container = styled.div`
    background-color: ${color.primaryGreen};
    padding: 20px 15px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
`;

const Image = styled.img`
    border-radius: 50%;
    width: 35px;
    height: 35px;
`;

const Top = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bottom = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
`;

const IconContainer = styled.div`
    margin: 10px 0;
    font-size: 25px;
    & > svg {
        fill: ${props => props.active ? "white" : "#C3DFC2"};
    }
`;

const SideBar = () => {

    const location = useLocation();
    const [activePath, setActivePath] = useState("/");

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname])


    return (
        <Container>
            <Top>
                {routeData.map(item => item.path !== "/profile/:username" && (
                    <Link key={item.id} to={item.path} title={item.name}>
                        <IconContainer active={activePath === item.path}>
                            {item.icon}
                        </IconContainer>
                    </Link>

                ))}
            </Top>
            <Bottom>
                <Link to="/profile">
                    <IconContainer>
                        <Image src={img} />
                    </IconContainer>
                </Link>
                <Link to="/">
                    <IconContainer active={true}>
                        <PersonAddAltRoundedIcon />
                    </IconContainer>
                </Link>
            </Bottom>
        </Container>
    )
}

export default SideBar
