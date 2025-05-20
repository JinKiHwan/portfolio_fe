import styled from '@emotion/styled';
import { colors, gradients } from '../styles/variables';
import { useEffect, useRef } from 'react';
import { useAnimation } from '../contexts/AnimationContext';
import gsap from 'gsap';

const Mobile = () => {
    const mobileRef = useRef(null);
    const { timeline } = useAnimation();

    useEffect(() => {
        gsap.set(mobileRef.current, {
            x: -100,
            opacity: 0,
        });
    }, []);

    return (
        <MobileWrapper ref={mobileRef} className="mobile">
            <div className="wrap">
                <div className="lens">
                    <div className="lens-item">
                        <span></span>
                    </div>
                </div>
                <div className="btn btn_1"></div>
                <div className="btn btn_2"></div>
                <div className="btn btn_3"></div>
                <div className="btn btn_4"></div>
            </div>
        </MobileWrapper>
    );
};

const MobileWrapper = styled.div`
    width: 14.5vw;
    aspect-ratio: 275/485;
    border: 1px solid ${colors.border};
    border-bottom: 0;
    background: #000;
    z-index: 2;
    position: absolute;
    right: calc(50% - 14.5vw);
    top: 8vw;
    border-radius: 1.5vw;
    box-shadow: -5px -15px 15px rgba(0, 0, 0, 0.5);

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

        .lens {
            width: 33%;
            height: 1.5vw;
            border: 1px solid ${colors.border};
            border-radius: 1.5vw;
            margin: 1vw auto 0;
            padding: 0.2vw 0.3vw;

            .lens-item {
                height: 100%;
                aspect-ratio: 1/1;
                border: 1px solid ${colors.border};
                border-radius: 50%;
                margin-left: auto;
                padding: 0.1vw;
                span {
                    width: 100%;
                    aspect-ratio: 1/1;
                    background: ${colors.border};
                    display: block;
                    border-radius: 50%;
                    position: relative;

                    &::after {
                        content: '';
                        display: block;
                        width: 50%;
                        aspect-ratio: 1/1;
                        background: #000;
                        position: absolute;
                        right: 6.5%;
                        top: 10.5%;
                        border-radius: 50%;
                    }
                }
            }
        }

        .btn {
            width: 3%;
            position: absolute;
            border: 1px solid ${colors.border};
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            border-right: 0;

            &.btn_1 {
                aspect-ratio: 8/27;
                left: -3%;
                top: 12%;
            }
            &.btn_2 {
                aspect-ratio: 8/46;
                left: -3%;
                top: 24%;
            }
            &.btn_3 {
                aspect-ratio: 8/46;
                left: -3%;
                top: 36%;
            }
            &.btn_4 {
                border-right: 1px solid ${colors.border};
                border-left: 0;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-top-right-radius: 3px;
                border-bottom-right-radius: 3px;
                aspect-ratio: 8/62;
                right: -3%;
                top: 30%;
            }
        }
    }
`;

export default Mobile;
