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

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: componentRef.current,
    //                 start: 'top center',
    //                 end: 'center center',
    //                 //markers: true,
    //             },
    //         })
    //             .to('body', { height: '100vh', overflow: 'hidden' })
    //             .to(codeRef.current, {
    //                 visibility: 'visible',
    //                 text: `function mySkill(stacks) {<br>
    //                       <i>&nbsp;</i><i>&nbsp;</i>let mySkill = [];<br>
    //                       <i>&nbsp;</i><i>&nbsp;</i>for(let i = 0; i < stacks.length; i++){<br>
    //                       <i>&nbsp;</i><i>&nbsp;</i><i>&nbsp;</i><i>&nbsp;</i>mySkill.push(stacks[i])<br>
    //                       <i>&nbsp;</i><i>&nbsp;</i>}<br><br>
    //                       <i>&nbsp;</i><i>&nbsp;</i>return mySkill;<br>
    //                       }`,
    //                 duration: 4.5,
    //                 ease: 'none',

    //                 onComplete: () => {
    //                     codeRef.current.innerHTML += '<span class="cursor"></span>';

    //                     // requestAnimationFrame(() => {
    //                     //     gsap.to('.cursor', {
    //                     //         delay: 3,
    //                     //         animation: 'none',
    //                     //         scale: 1000,
    //                     //         background: '#000',
    //                     //     });
    //                     // });
    //                 },
    //             })
    //             .to('body', { height: 'auto', overflow: 'visible' });
    //     });

    //     return () => ctx.revert();
    // }, []);

    const boxCount = 64;
    const boxes = Array.from({ length: boxCount });
    useEffect(() => {
        gsap.to('.box', {
            duration: 1,
            scale: 0.2,
            y: 15,
            z: 30,
            ease: 'power1.inOut',
            stagger: {
                each: 0.1,
                grid: [8, 8],
                //axis: 'xy',
                from: 'center',
                repeat: -1,
                yoyo: true,
            },
        });
    }, []);

    return (
        <SkillSection ref={componentRef} id="skill">
            {/* <CodeBox>
                <div className="code-wrapper">
                    <div className="code-box" ref={codeRef}></div>
                    <span className="cursor" />
                </div>
            </CodeBox> */}
            {/* <div className="skill-wrap">
                <StackArchive className="front"></StackArchive>
                <StackArchive className="back"></StackArchive>
                <StackArchive className="server"></StackArchive>
            </div> */}

            <div className="skill-wrap">
                <div className="skill-3d">
                    <StackArchive className="front">
                        {boxes.map((_, i) => (
                            <div className="box" key={i} data-index={i}></div>
                        ))}
                    </StackArchive>
                    <StackArchive className="back" />
                    <StackArchive className="server" />
                </div>
            </div>
        </SkillSection>
    );
}

const SkillSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    //background: #2c2b2b;

    /* .skill-wrap {
        width: 400px;
        aspect-ratio: 1/1;
        position: relative;
        perspective-origin: center;
        perspective: 1000px;
        //transform: rotate3d(1, 1, 1, 45deg);
        transform: rotateX(80deg);
    } */

    .skill-wrap {
        width: 400px;
        aspect-ratio: 1 / 1;
        position: relative;
        perspective: 1000px; /* 부모에만 줘야 함 */
    }

    .skill-3d {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transform: rotateX(25deg) rotateY(45deg); /* 회전은 여기서 */
    }
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

const StackArchive = styled.article`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #fff;
    &.front {
        border-color: yellow;
        transform: translateZ(150px);
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        > div {
            display: inline-block;
            width: calc((100% - 70px) / 8);
            aspect-ratio: 1/1;
            background: yellow;
            border-radius: 50%;
        }
    }
    &.back {
        border-color: green;
        transform: translateZ(0px);
    }
    &.server {
        border-color: blue;
        transform: translateZ(-150px);
    }
`;
