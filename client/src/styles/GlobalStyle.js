import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
    return (
        <Global
            styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');

                @font-face {
                    font-family: 'Pretendard-Regular';
                    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
                    font-weight: 400;
                    font-style: normal;
                }
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Noto Sans KR', sans-serif;
                    font-size: 16px;
                    line-height: 1.5;
                    color: #333;
                }
            `}
        />
    );
};

export default GlobalStyle;
