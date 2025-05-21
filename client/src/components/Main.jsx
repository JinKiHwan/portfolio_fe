/** Main.tsx */
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';

gsap.registerPlugin(TextPlugin);

function Main() {
    const codeRef = useRef(null);
    const swiperRef = useRef(null);
    const laptopRef = useRef(null);
    const mobileRef = useRef(null);
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // 초기 등장 애니메이션
        tl.fromTo(laptopRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
            .fromTo(mobileRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, '-=0.8')
            .fromTo(titleRef1.current, { yPercent: 100 }, { yPercent: 0 }, '<')
            .fromTo(titleRef2.current, { yPercent: 100 }, { delay: 0.3, yPercent: 0 }, '<')
            // 타이핑 효과
            .to(codeRef.current, {
                text: `function Portfolio() {<br>
                        <i>&nbsp </i>return (<br> 
                        <i>&nbsp </i><i>&nbsp </i>&lt;&gt;<br>
                        <i>&nbsp </i><i>&nbsp </i><i>&nbsp </i>&lt;h1&gt;반갑습니다&lt;/h1&gt;<br>
                        <i>&nbsp </i><i>&nbsp </i><i>&nbsp </i>&lt;div className='portfolio-list'&gt;&lt;/div&gt;<br>
                        <i>&nbsp </i><i>&nbsp </i>&lt/&gt;<br>
                        <i>&nbsp</i>)};`,
                duration: 2.5,
                ease: 'none',
                onComplete: () => {
                    swiperRef.current?.classList.add('show');
                },
            });
    }, []);

    return (
        <Container id="main">
            <div className="inner">
                <div className="laptop">
                    <div className="laptop-wrap" ref={laptopRef}>
                        <figure>
                            <img src="/img/laptop.webp" alt="" />
                        </figure>
                        <CodeBox ref={codeRef} />
                    </div>
                </div>
                <div className="mobile">
                    <div className="mobile-wrap" ref={mobileRef}>
                        <figure>
                            <img src="/img/mobile.webp" alt="" />
                        </figure>
                        <SwiperBox ref={swiperRef} className="swiper-container">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={15}
                                slidesPerView={1.5}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}>
                                <SwiperSlide>React.js</SwiperSlide>
                                <SwiperSlide>Vue.js</SwiperSlide>
                                <SwiperSlide>Node.js</SwiperSlide>
                                <SwiperSlide>GSAP</SwiperSlide>
                            </Swiper>
                        </SwiperBox>
                    </div>
                </div>

                <div className="title">
                    <p>
                        <span ref={titleRef1}> 오늘도 좋은날입니다</span>
                    </p>
                    <p>
                        <span ref={titleRef2}> 웹개발자 진기환입니다</span>
                    </p>
                </div>

                <div className="object">
                    <span></span>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.section`
    aspect-ratio: 16/9;
    .inner {
        height: 100%;
        position: relative;
        .laptop {
            width: 20vw;
            aspect-ratio: 263/165;
            position: absolute;
            left: 50%;
            top: 40%;
            transform: translate(-90%, -50%);
            z-index: -1;
            pointer-events: none;

            .laptop-wrap {
                width: 100%;
                height: 100%;
                padding: 1.5vw;
                overflow: hidden;
            }
            figure {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .mobile {
            width: 15vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateY(-80%);
            box-shadow: -10px 0 15px rgba(0, 0, 0, 1);
            background: rgba(0, 0, 0, 0.95);
            aspect-ratio: 197/312;
            pointer-events: none;

            &-wrap {
                padding: 1.5vw;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
            }

            figure {
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                z-index: -1;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .title {
            font-family: 'BMDOHYEON';
            font-weight: 800;
            font-size: 3vw;
            text-align: center;
            position: absolute;
            left: 50%;
            top: 60%;
            transform: translate(-50%, -50%);

            p {
                overflow: hidden;
            }
            span {
                display: block;
                background: linear-gradient(-180deg, #f1f1f1, #a8a8a8);
                color: transparent;
                -webkit-background-clip: text;
            }
        }
    }
`;

const CodeBox = styled.div`
    color: #39ff14; // 형광 초록
    font-family: 'D2Coding';
    font-size: 0.75vw;
    white-space: nowrap;
    //padding: 10px;
`;

const SwiperBox = styled.div`
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    width: 100%;
    padding-left: 0.5vw;
    &.show {
        opacity: 1;
    }
    .swiper-slide {
        background: #111;
        color: #39ff14;
        border: 1px solid #39ff14;
        text-align: center;
        font-size: 0.8vw;
        padding: 20px;
        aspect-ratio: 3/4;
    }
`;
export default Main;
