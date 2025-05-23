import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function Skill() {
    const componentRef = useRef(null);
    const codeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: componentRef.current,
                    start: 'top center',
                    end: 'center center',
                    //markers: true,
                },
            })
                .to('body', { height: '100vh', overflow: 'hidden' })
                .to(codeRef.current, {
                    visibility: 'visible',
                    text: `function mySkill(stacks) {<br>
                          <i>&nbsp;</i><i>&nbsp;</i>let mySkill = [];<br>
                          <i>&nbsp;</i><i>&nbsp;</i>for(let i = 0; i < stacks.length; i++){<br>
                          <i>&nbsp;</i><i>&nbsp;</i><i>&nbsp;</i><i>&nbsp;</i>mySkill.push(stacks[i])<br>
                          <i>&nbsp;</i><i>&nbsp;</i>}<br><br>
                          <i>&nbsp;</i><i>&nbsp;</i>return mySkill;<br>
                          }`,
                    duration: 4.5,
                    ease: 'none',

                    onComplete: () => {
                        codeRef.current.innerHTML += '<span class="cursor"></span>';

                        requestAnimationFrame(() => {
                            gsap.to('.cursor', {
                                delay: 3,
                                animation: 'none',
                                scale: 1000,
                                background: '#000',
                            });
                        });
                    },
                })
                .to('body', { height: 'auto', overflow: 'visible' });
        });

        return () => ctx.revert();
    }, []);

    return (
        <SkillSection ref={componentRef} id="skill">
            <CodeBox>
                <div className="code-wrapper">
                    <div className="code-box" ref={codeRef}></div>
                    <span className="cursor" />
                </div>
            </CodeBox>
        </SkillSection>
    );
}

const SkillSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: #2c2b2b;
`;

const CodeBox = styled.div`
    white-space: pre;
    font-family: 'D2Coding', monospace;
    font-size: 0.875vw;
    color: #39ff14;
    line-height: 1.6;
    width: 600px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;

    .code-box {
        width: 22vw;
        aspect-ratio: 336/285;
        position: relative;
    }
    .cursor {
        display: inline-block;
        width: 2px;
        height: 0.875vw;
        background: #39ff14;
        animation: blink 0.9s steps(1) infinite;
        margin-left: 4px;
        vertical-align: center;
        transform: translateY(0.2vw);
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
`;
