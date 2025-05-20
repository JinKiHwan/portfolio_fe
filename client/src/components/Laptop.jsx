import styled from '@emotion/styled';
import { colors, gradients } from '../styles/variables';
import { useEffect, useRef, useState } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import gsap from 'gsap';

const Laptop = () => {
    const laptopRef = useRef(null);
    const codeRef = useRef(null);
    const { timeline } = useAnimation();
    const [code, setCode] = useState('');
    const codeText = `function Portfolio() {
    return (
        <div className="portfolio">
            <h1>안녕하세요</h1>
            <p>웹 개발자입니다</p>
        </div>
    );
}`;

    useEffect(() => {
        gsap.set(laptopRef.current, {
            x: -100,
            opacity: 0,
        });

        // 메인 애니메이션이 끝난 후 타이핑 효과 시작
        if (timeline) {
            timeline.eventCallback('onComplete', () => {
                let currentIndex = 0;
                const typingInterval = setInterval(() => {
                    if (currentIndex < codeText.length) {
                        setCode((prev) => prev + codeText[currentIndex]);
                        currentIndex++;
                    } else {
                        clearInterval(typingInterval);
                    }
                }, 50);
            });
        }
    }, [timeline]);

    return (
        <LaptopWrapper ref={laptopRef} className="laptop">
            <div className="wrap">
                <div className="laptop-top-line">
                    <span></span>
                    <i></i>
                    <span></span>
                </div>
                <div className="code-container" ref={codeRef}>
                    <pre>
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </LaptopWrapper>
    );
};

const LaptopWrapper = styled.div`
    width: 18vw;
    aspect-ratio: 345/220;
    border-left: 1px solid ${colors.border};
    border-top: 1px solid ${colors.border};
    border-radius: 0.5vw;
    border-bottom-left-radius: 0;
    padding: 0.5vw;
    position: absolute;
    top: 15vw;
    left: calc(50% - 18vw);
    overflow: hidden;
    background: #000;
    box-sizing: border-box;
    box-shadow: inset 0px -30px 0px rgba(0, 0, 0, 1);

    &::after {
        content: '';
        width: calc(100% + 10px);
        height: 85%;
        display: block;
        background: ${gradients.shadowBottom};
        position: absolute;
        left: -5px;
        bottom: -5px;
        z-index: 1;
    }

    .wrap {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 0;
        border-left: 1px solid ${colors.border};
        border-radius: 0.5vw;
        border-bottom-left-radius: 0;

        .laptop-top-line {
            width: 100%;
            aspect-ratio: 220/8;
            display: flex;

            span {
                display: block;
                width: calc(50% - 4%);
                border-top: 1px solid ${colors.border};

                &:first-of-type {
                    border-top-left-radius: 0.5vw;
                }
                &:last-of-type {
                    border-top-right-radius: 0.5vw;
                }
            }
            i {
                display: block;
                width: 8%;
                border: 1px solid ${colors.border};
                border-top: 0;
                background: #000;
                border-bottom-left-radius: 0.3vw;
                border-bottom-right-radius: 0.3vw;
            }
        }

        .code-container {
            padding: 1vw;
            color: #fff;
            font-family: 'Consolas', monospace;
            font-size: 0.8vw;
            line-height: 1.4;
            overflow: hidden;
            height: calc(100% - 2vw);

            pre {
                margin: 0;
                white-space: pre-wrap;
            }

            code {
                color: #00ff00;
            }
        }
    }
`;

export default Laptop;
