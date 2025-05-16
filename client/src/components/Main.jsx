import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from '@emotion/styled';

function Main() {
    return (
        <>
            <Container>
                <div className="paper-t">
                    <img src="/img/paper-bt.webp" alt="" />
                </div>
                <div className="paper-bt">
                    <img src="/img/paper-bt.webp" alt="" />
                </div>
                <div className="main-video">
                    <video
                        src="https://www.designpax.co.kr/img/sub/sub_video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}></video>
                </div>
            </Container>
        </>
    );
}

const Container = styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    //background: url('/img/main.webp') no-repeat center center/cover;
    z-index: 0;
    overflow: hidden;

    &::after {
        //content: '';
        display: block;
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(14, 16, 15, 1) 50%, rgba(14, 16, 15, 0.1) 100%);
    }

    .paper-bt {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -55px;

        img {
            pointer-events: none;
            width: 100%;
        }
    }
    .paper-t {
        width: 100%;
        position: absolute;
        left: 0;
        top: -75px;

        img {
            pointer-events: none;
            width: 100%;
            transform: rotate(180deg);
        }
    }

    .main-video {
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
        filter: grayscale(1);
    }
`;

export default Main;
