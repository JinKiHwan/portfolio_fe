import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';
import Main from '../../components/Main';
import GPT from '../../components/GPT';

function Home() {
    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { x: 200, duration: 1 });
    }, []);

    return (
        <>
            <Container>
                <Main></Main>
                <GPT></GPT>
                <section>2</section>
                <section>3</section>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    position: relative;
    background: #000;
    z-index: 0;
    section {
        aspect-ratio: 16/9;
        width: 100%;
    }

    .inner {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        min-height: 100%;
        position: relative;
        z-index: 0;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        z-index: 10;
        background: url('/img/overlay.gif');
        opacity: 0.05;
    }
`;

export default Home;
