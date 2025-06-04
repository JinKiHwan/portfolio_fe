import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import LoadingScreen from '../../components/LoadingScreen';
import Digimon from '../../components/Digimon';
import Background from '../../components/Background';
import MainComp from '../../components/MainComp';

import { playIntroTimeline } from '../../utils/animation';

function Home() {
    /* //////////////// */
    /* Intro Animation */
    /* /////////////// */
    const bgRef = useRef(null);
    const mainRef = useRef(null);
    const digimonRef = useRef(null);
    useEffect(() => {
        playIntroTimeline(bgRef.current, mainRef.current);
    }, []);

    return (
        <Container>
            <LoadingScreen></LoadingScreen>
            <Digimon ref={digimonRef}></Digimon>
            <Background ref={bgRef} />
            <MainComp ref={mainRef} />
        </Container>
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
        opacity: 0.01;
    }
`;

export default Home;
