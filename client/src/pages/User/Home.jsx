import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import Main from '../../components/Main';
import About from '../../components/AboutMe';

function Home() {
    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { x: 200, duration: 1 });
    }, []);

    return (
        <>
            <Container>
                <Header></Header>
                <Main></Main>
                <About></About>
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
    font-family: 'Pretendard-Regular';

    section {
        aspect-ratio: 16/9;
        width: 100%;
    }

    .inner {
        width: 62.5vw;
        max-width: 95%;
        height: 100%;
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

    @font-face {
        font-family: 'PartialSansKR-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/PartialSansKR-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'D2Coding';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'GongGothicMedium';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'BMDOHYEON';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;

export default Home;
