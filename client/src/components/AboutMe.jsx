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
    const componentRef = useRef(null);
    const componentInnerRef = useRef(null);
    const playwebRef = useRef(null);
    const mirRef = useRef(null);
    const gamedexRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const aboutArray = gsap.utils.toArray('.about-box dl');

            gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    toggleActions: 'play none none reverse',
                },
            })
                .to(aboutBgRef.current, {
                    width: '100vw',
                    height: '100vh',
                    duration: 0.5,
                    ease: 'power3.inOut',
                })
                .to(aboutMeRef.current, { opacity: 1, delay: 0.2 }, '<')
                .to(aboutMeEffectRef.current, { y: 0, delay: 0.4 }, '<')
                .to(aboutMeImgRef.current, { opacity: 1, x: 0, delay: 0.6 }, '<')
                .to(aboutArray, { opacity: 1, y: 0, stagger: 0.1 }, '<');
        }, componentRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        console.log(componentInnerRef.current?.offsetHeight);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: componentInnerRef.current,
                    start: 'top top+=1',
                    end: '+=4000 top',
                    scrub: 1,
                    pin: true,
                    pinSpacing: true, // 또는 false로 실험
                    //markers: true,
                    toggleActions: 'play none none reverse',
                },
            });

            tl.set(componentRef.current, { willChange: 'position' })
                .to('.work-place span', { yPercent: 0, ease: 'none' }, 0)
                .to(playwebRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '<')
                .to('.work-place span', { yPercent: -100, ease: 'none' }, 1)
                .to(playwebRef.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }, '<')
                .to(mirRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '<')
                .to('.work-place span', { yPercent: -200, ease: 'none' }, 2)
                .to(mirRef.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }, '<')
                .to(gamedexRef.current, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, '<')
                .to(aboutBgRef.current, { width: 0, height: 0 }, 3)
                .to(componentRef.current, { opacity: 0 }, '<');
        }, componentRef);
        return () => ctx.revert();
    }, []);

    return (
        <About id="about" ref={componentRef}>
            <div className="about-pin" ref={componentInnerRef}>
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
                            <dt>Education : </dt>
                            <dd>Beijing Capital Normal University</dd>
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
                        <div className="work-place-img">
                            <figure ref={playwebRef}>
                                <img src="/img/playweb.webp" alt="" />
                            </figure>
                            <figure ref={mirRef}>
                                <img src="/img/mir.webp" alt="" />
                            </figure>
                            <figure ref={gamedexRef}>
                                <img src="/img/gamedex.webp" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </About>
    );
}

const About = styled.section`
    width: 100%;
    height: auto;
    opacity: 1;
    height: auto;
    aspect-ratio: 0 !important;
    position: relative;
    //will-change: position;

    .about-pin {
        width: 100%;
        height: 100%;
        padding: 3vw 0;
        position: relative;
    }

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
            transform: translateY(50px);
            opacity: 0;

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

        .work-place-img {
            width: 25vw;
            aspect-ratio: 16/9;
            position: relative;
            figure {
                position: absolute;
                left: 0;
                top: 0;
                clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%);
                will-change: clip-path;
                transition: clip-path 0.5s ease; /* fallback */
            }
        }
    }
`;

export default AboutMe;
