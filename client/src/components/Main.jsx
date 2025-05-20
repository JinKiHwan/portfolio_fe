import styled from '@emotion/styled';
import { colors, gradients } from '../styles/variables';
import { useEffect } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import Laptop from './Laptop';
import Mobile from './Mobile';

function Main() {
    const { playAnimation } = useAnimation();

    useEffect(() => {
        playAnimation();
    }, []);

    return (
        <Container>
            <div className="inner">
                <Title>
                    <p>좋은 날입니다</p>
                    <p>웹 개발자</p>
                </Title>
                <Laptop />
                <Mobile />
            </div>
        </Container>
    );
}

const Container = styled.section`
    aspect-ratio: 16/9;
    .inner {
        height: 100%;
    }
`;

const Title = styled.div`
    position: absolute;
    z-index: 5;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    p {
        text-align: center;
        font-weight: 800;
        font-size: min(64px, 28vw);
        font-family: 'Pretendard-Regular';
        background: ${gradients.text};
        color: transparent;
        -webkit-background-clip: text;
        line-height: 1.2;
    }
`;

export default Main;
