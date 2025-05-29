import gsap from 'gsap';

/**
 * 배경과 메인 요소에 대한 진입 애니메이션 타임라인
 * @param {HTMLElement} bg - 배경 요소 (예: wall-top, wall-floor 포함)
 * @param {HTMLElement} main - 메인 요소
 */

// 배경 및 메인 요소 등장 애니메이션
export function playIntroTimeline(bgElement, mainElement, DigimonElement) {
    const wallTop = bgElement.querySelector('.wall-top');
    const wallFloor = bgElement.querySelector('.wall-floor');
    const wallLast = bgElement.querySelector('.wall-last');
    const digivice = mainElement.querySelector('.digivice');

    const tl = gsap.timeline();
    tl.to(wallTop, {
        clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
        duration: 2,
        //ease: 'bounce.in',
    })
        .to(
            wallFloor,
            {
                duration: 2,
                clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
            },
            '<'
        )
        .to(digivice, {
            duration: 2,
            ease: 'elastic.inOut(1,0.3)',
            opacity: 1,
            onStart: () => {
                const sound = new Audio('/sound/degivice.mp3');

                // 첫 번째 재생
                sound.play();

                // 두 번째 재생 (지연 실행)
                setTimeout(() => {
                    const sound2 = new Audio('/sound/degivice.mp3');
                    sound2.play();
                }, 300); // 약간의 간격을 두고 재생
            },
            onComplete: () => {
                gsap.to(digivice, {
                    filter: 'contrast(1)',
                    duration: 2,
                });
            },
        });

    return tl;
}

// 스킬 섹션 애니메이션
export function animateSkills(skillElement) {
    gsap.from(skillElement, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power2.out',
    });
}
