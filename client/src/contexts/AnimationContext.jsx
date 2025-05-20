import { createContext, useContext, useRef } from 'react';
import gsap from 'gsap';

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
    const timeline = useRef(gsap.timeline());

    const playAnimation = () => {
        timeline.current
            .to('.laptop', {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
            })
            .to(
                '.mobile',
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                },
                '-=0.5'
            );
    };

    return <AnimationContext.Provider value={{ timeline: timeline.current, playAnimation }}>{children}</AnimationContext.Provider>;
};

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};
