import styled from '@emotion/styled';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    useEffect(() => {
        setTimeout(() => {
            const sections = ['main', 'about', 'skill'];

            sections.forEach((id, index) => {
                ScrollTrigger.create({
                    trigger: `#${id}`,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {
                        setActive(index);
                    },
                    onEnterBack: () => setActive(index),
                    markers: true, // 디버깅 시 사용
                });
            });

            function setActive(index) {
                const lis = document.querySelectorAll('.header_inner li');
                lis.forEach((li, i) => {
                    li.classList.toggle('active', i === index);
                });
            }
        }, 1000);
    }, []);

    return (
        <HeaderWrap>
            <div className="header_inner">
                <h1>
                    <a href="/"> &lt;/&gt; </a>
                </h1>
                <ul>
                    <li className="active">
                        <a href="#main">
                            <img src="/img/home.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            <img src="/img/about.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#skill">
                            <img src="/img/skill.webp" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#project">
                            <img src="/img/project.webp" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
    color: #39ff14;
    position: fixed;
    left: 0;
    top: 0;
    width: 60px;
    height: 100vh;
    border-right: 1px solid #37ff1442;
    z-index: 10;
    backdrop-filter: blur(5px);

    .header_inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px 0;

        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-weight: 400;
            font-size: 24px;

            a {
                display: block;
                width: 100%;
                text-align: center;
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            li {
                width: 100%;
                aspect-ratio: 1/1;
                a {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;

                    img {
                        opacity: 0.3;
                    }
                }

                &.active {
                    background: #25a30f;
                    color: #000;

                    img {
                        opacity: 1;
                    }
                }
            }
        }
    }
`;
export default Header;
