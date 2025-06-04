/** Main.tsx */
import { useEffect, useRef } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';

const MainComp = forwardRef((props, ref) => {
    return (
        <Container id="main" ref={ref}>
            <div className="digivice-wrap">
                <figure className="digivice">
                    <img src="/img/main/digivice.webp" alt="" />
                </figure>
                <div className="digivice-box"></div>

                <figure className="egg">
                    <img src="/img/main/egg.webp" alt="" />
                </figure>
            </div>
        </Container>
    );
});

const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .digivice-wrap {
        width: 15.5vw;
        aspect-ratio: 1/1;
        position: relative;

        .digivice,
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
        }

        .digivice {
            //transform: perspective(500px) translateZ(800px);
            opacity: 0;
            filter: contrast(0);
        }

        .digivice-box {
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

        .egg {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 4vw;
            transform: translate(-50%, calc(-50% - 1vw));

            img {
                animation: egg 1s steps(1) infinite;
                transform-origin: center bottom;
            }
        }

        &:hover {
            .digivice-box {
                opacity: 1;
                box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5), -10px 10px 10px rgba(255, 255, 255, 0.5),
                    10px -10px 10px rgba(255, 255, 255, 0.5), -10px -10px 10px rgba(255, 255, 255, 0.5);
            }
        }

        @keyframes egg {
            0%,
            100% {
                transform: scale(1, 1);
            }
            50% {
                transform: scale(1, 0.95);
            }
        }
    }
`;

export default MainComp;
