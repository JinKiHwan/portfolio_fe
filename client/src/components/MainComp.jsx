/** Main.tsx */
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function MainComp() {
    return (
        <Container id="main">
            <div className="digivice">
                <figure>
                    <img src="/img/main/digivice.webp" alt="" />
                </figure>

                <div className="digivice-box"></div>
            </div>
            {/* <div class="sprite"></div> */}
        </Container>
    );
}

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .digivice {
        width: 15.5vw;
        aspect-ratio: 1/1;
        position: relative;

        figure,
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        figure {
            opacity: 0.5;
        }
        &-box {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 29.5%;
            aspect-ratio: 1/1;
            border-radius: 0.5vw;
            background: #3b3b3b;
            transform: translate(-50%, calc(-50% - 0.12vw));
            opacity: 1;
            transition: opacity 0.3s, box-shadow 0.2s 0.2s;
            overflow: hidden;
        }

        &:hover {
            .digivice-box {
                opacity: 1;
                box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5), -10px 10px 10px rgba(255, 255, 255, 0.5), 10px -10px 10px rgba(255, 255, 255, 0.5), -10px -10px 10px rgba(255, 255, 255, 0.5);
            }
        }
    }

    .sprite {
        width: 150px; /* 각 프레임의 너비 */
        height: 120px; /* 각 프레임의 높이 */
        background-image: url('/img/coromon.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        //animation: play 1s steps(1) infinite;
        animation-name: play;
        animation-duration: 1s;
        animation-timing-function: steps(1);
        animation-iteration-count: infinite;

        &:hover {
            animation-name: go;
        }
    }

    /* 애니메이션 키프레임 */
    @keyframes play {
        0%,
        100% {
            background-position: 0 0;
        }
        50% {
            background-position: -150px 0;
        }
    }
    @keyframes go {
        0%,
        100% {
            background-position: 0 0;
        }
        20% {
            background-position: -150px 0;
        }
        40% {
            background-position: -300px 0;
        }
        60% {
            background-position: -450px 0;
        }
        80% {
            background-position: -600px 0;
        }
    }
`;

export default MainComp;
