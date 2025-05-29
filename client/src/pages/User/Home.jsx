import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import LoadingScreen from '../../components/LoadingScreen';
import Header from '../../components/Header';
import Digimon from '../../components/Digimon';
import Background from '../../components/Background';
import MainComp from '../../components/MainComp';
import About from '../../components/AboutMe';
import Skill from '../../components/Skill';

import { playIntroTimeline } from '../../utils/animation';

function Home() {
    /* ///////////////// */
    /* Loading Animation */
    /* ///////////////// */

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const progressRef = useRef(0);
    useEffect(() => {
        const increment = () => {
            if (progressRef.current < 100) {
                progressRef.current += Math.random() * 10;
                const clamped = Math.min(progressRef.current, 100);
                setProgress(clamped); // 화면에 보이는 퍼센트
            }
        };

        const interval = setInterval(increment, 100);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
            setTimeout(() => setLoading(false), 300);
        }, 1200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    const handleStart = () => {
        if (!bgRef.current || !mainRef.current) {
            console.warn('bgRef or mainRef is not ready yet');
            return;
        }

        playIntroTimeline(bgRef.current, mainRef.current);

        const audio1 = new Audio('/sound/degivice.mp3');
        audio1.play();
        setTimeout(() => {
            const audio2 = new Audio('/sound/degivice.mp3');
            audio2.play();
        }, 300);

        setIsStarted(true);
    };

    /* //////////////// */
    /* Intro Animation */
    /* /////////////// */
    const bgRef = useRef(null);
    const mainRef = useRef(null);
    useEffect(() => {
        if (!loading) {
            playIntroTimeline(bgRef.current, mainRef.current);
        }
    }, [loading]);

    if (loading || !isStarted) {
        return <LoadingScreen loading={loading} isStarted={isStarted} onStart={handleStart} progress={progress} />;
    }

    return (
        <Container>
            <Digimon></Digimon>
            <Background ref={bgRef} />
            <MainComp ref={mainRef} />
            <section></section>
            <section></section>
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
