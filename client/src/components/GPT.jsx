// components/GlowingOutline.js
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const glow = keyframes`
  from {
    filter: drop-shadow(0 0 5px #00ffff);
  }
  to {
    filter: drop-shadow(0 0 12px #00ffff);
  }
`;

const glowStyle = css`
    width: 100%;
    max-width: 800px;
    animation: ${glow} 2s ease-in-out infinite alternate;
    filter: drop-shadow(0 0 5px #00ffff);
`;

const GlowingOutline = () => {
    return (
        <div>
            <img src="/assets/device_outline_clean.svg" alt="outline" css={glowStyle} />
        </div>
    );
};

export default GlowingOutline;
