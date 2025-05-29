/** Main.tsx */
import { useEffect, useRef } from 'react';
import { forwardRef } from 'react';
import styled from '@emotion/styled';

const Digimon = forwardRef((props, ref) => {
    return (
        <DigimonArea ref={ref}>
            <div className="sprite"></div>
        </DigimonArea>
    );
});

const DigimonArea = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    .sprite {
        width: 8vw; /* 각 프레임의 너비 */
        height: auto;
        aspect-ratio: 150/120;
        background-image: url('/img/coromon.png');
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: calc(8vw * 5) auto;
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
            background-position: -8vw 0;
        }
    }
    @keyframes go {
        0%,
        100% {
            background-position: 0 0;
        }
        20% {
            background-position: -8vw 0;
        }
        40% {
            background-position: -16vw 0;
        }
        60% {
            background-position: -24vw 0;
        }
        80% {
            background-position: -32vw 0;
        }
    }
`;

export default Digimon;
