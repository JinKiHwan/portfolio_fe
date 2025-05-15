import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';

function Home() {
    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { x: 200, duration: 1 });
    }, []);

    return (
        <>
            <Container>
                <section>
                    <Box ref={boxRef}>움직이는 박스</Box>
                </section>
                <section>2</section>
                <section>3</section>
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    position: relative;
    background: #0e100f;
    z-index: 0;
    section {
        min-height: 100vh;
        width: 100%;
        border: 1px solid #f00;
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

const Box = styled.div`
    width: 100px;
    height: 100px;
    background: tomato;
    margin: 50px;
`;

export default Home;
