import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../../components/Header';
import Main from '../../components/Main';
import About from '../../components/AboutMe';
import Skill from '../../components/Skill';

function Home() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let progressValue = 0;
        const increment = () => {
            if (progressValue < 100) {
                progressValue += Math.random() * 10;
                setProgress(Math.min(progressValue, 100));
            }
        };

        const interval = setInterval(increment, 100);

        const timer = setTimeout(() => {
            clearInterval(interval);
            setProgress(100);
            setTimeout(() => setLoading(false), 300); // slight delay to finish bar animation
        }, 1200); // 최소 1.2초 보장

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    if (loading) {
        return (
            <LoadingScreen>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                    <p>Loading... {Math.floor(progress)}%</p>
                </div>
            </LoadingScreen>
        );
    }

    return (
        <Container>
            <Header />
            <Main />
            <About />
            <Skill />
            <section></section>
            <section></section>
        </Container>
    );
}

const LoadingScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000;
    color: #39ff14;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'D2Coding';

    .progress-container {
        text-align: center;
        width: 300px;
    }

    .progress-bar {
        height: 3px;
        background: #39ff14;
        transition: width 0.3s ease;
        margin-bottom: 10px;
    }
`;

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
`;

export default Home;
