import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
    const aboutBgRef = useRef(null);
    const aboutMeRef = useRef(null);
    const aboutMeEffectRef = useRef(null);
    const aboutMeImgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                end: 'bottom center',
                markers: true,
                onEnter: () => {
                    gsap.to(aboutBgRef.current, {
                        width: '100%',
                        height: '100%',
                        duration: 0.5,
                        ease: 'power3.inOut',
                    });
                    gsap.to(aboutMeRef.current, { opacity: 1 });
                    gsap.to(aboutMeEffectRef.current, { y: 0, delay: 0.5 });
                    gsap.to(aboutMeImgRef.current, { opacity: 1, x: 0, delay: 0.8 });
                },

                onLeaveBack: () => {
                    gsap.to(aboutBgRef.current, {
                        width: '0%',
                        height: '0%',
                        duration: 1,
                        ease: 'power3.inOut',
                    });
                },
            },
        });
    }, []);

    return (
        <About id="about">
            <div className="about-bg" ref={aboutBgRef} />
            <div className="inner">
                <h2 ref={aboutMeRef}>
                    About <span ref={aboutMeEffectRef}>&nbsp;&#123; Me &#125;</span>
                    <i>
                        <img ref={aboutMeImgRef} src="/img/sticker.webp" alt="" />
                    </i>
                </h2>

                <div className="about-box">
                    <dl>
                        <dt>Name : </dt>
                        <dd> Jin KiHwan</dd>
                    </dl>

                    <dl>
                        <dt>Birth : </dt>
                        <dd> 1995.06.27</dd>
                    </dl>

                    <dl>
                        <dt>Work Place : </dt>
                        <dd className="work-place">
                            <span>
                                플레이웹 <i className="fast">2020.03 ~ 2022.07</i>
                            </span>
                            <span>
                                미르웹디자인 <i className="fast">2023.02 ~ 2023.07</i>
                            </span>
                            <span>
                                게임덱스 <i className="present">2023.07 ~ </i>
                            </span>
                        </dd>
                    </dl>

                    <dl>
                        <dt>Education : </dt>
                        <dd>Beijing Capital Normal University</dd>
                    </dl>
                </div>
            </div>
        </About>
    );
}

const About = styled.section`
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding: 3vw 0;

    .about-bg {
        width: 0%;
        height: 0%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url('/img/intro-bg.webp');
        background-repeat: repeat;
        background-size: 3.5vw;
        opacity: 0.45;
        background-position: left 0 top 0;
        box-shadow: inset -18vw -5vw 50px rgba(0, 0, 0, 0.3), inset -15vw -15vw 50px rgba(0, 0, 0, 0.3);
        border-bottom-right-radius: 50%;
    }

    h2 {
        display: flex;
        //align-items: baseline;
        color: #fff;
        font-size: 3vw;
        opacity: 0;
        overflow: hidden;
        span {
            color: #39ff14;
            font-family: 'D2Coding';
            display: block;
            transform: translateY(100%);
        }

        i {
            padding-top: 0.1vw;
            width: 5vw;
            animation: sticker 2s infinite steps(1);
            img {
                transform: translateX(-50px);
                opacity: 0;
            }
        }
    }

    @keyframes sticker {
        0% {
            transform: rotate(-5deg);
        }
        50% {
            transform: rotate(5deg);
        }
        100% {
            transform: rotate(-5deg);
        }
    }

    .about-box {
        margin-top: 3vw;
        > dl {
            display: flex;
            color: #eee;
            margin-bottom: 2vw;
            height: 3vw;
            font-size: 2vw;
            font-weight: 800;

            dt {
                white-space: nowrap;
                margin-right: 1vw;
            }

            dd {
                height: 100%;
                overflow: hidden;
                &.work-place {
                    display: flex;
                    flex-direction: column;

                    i {
                        font-style: normal;
                        font-size: 1vw;
                        font-weight: 800;

                        &.fast {
                            color: #6e0303;
                        }
                        &.present {
                            color: #39ff14;
                        }
                    }
                }
            }
        }
    }
`;

export default AboutMe;
