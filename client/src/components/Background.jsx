import styled from '@emotion/styled';
import { forwardRef } from 'react';

const Background = forwardRef((props, ref) => {
    return (
        <BG ref={ref} className="background">
            <div className="wall-wrap">
                <div className="wall-last"></div>
                <div className="wall wall-top"></div>
                <div className="wall wall-floor"></div>
            </div>
        </BG>
    );
});

const BG = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    overflow: hidden;

    .wall-wrap {
        width: 100%;
        height: 100%;
        position: relative;
        perspective: 500px;
        perspective-origin: center center;
    }

    .wall {
        width: 200%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(to right, #6af07188 2px, transparent 2px), linear-gradient(to bottom, #6af07188 2px, transparent 2px);
        background-position: center center;
        background-size: 4vw 4vw;
        &:hover {
            &.wall-floor {
                transform: rotateX(90deg);
            }
            &.wall-top {
                transform: rotateX(-90deg);
            }
        }
        &.wall-top {
            top: auto;
            bottom: 0;
            transform-origin: top center;
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
        }

        &.wall-floor {
            top: auto;
            bottom: 0;
            transform-origin: bottom center;
            opacity: 1;
            clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);

            //transform: rotateX(90deg);
        }
    }

    .wall-last {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #000;
        transform: translateZ(-850px);
        filter: blur(10px);
        z-index: 1;
        opacity: 0;
    }
`;

export default Background;
