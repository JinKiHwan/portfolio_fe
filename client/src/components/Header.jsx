import styled from '@emotion/styled';

function Header() {
    return (
        <HeaderWrap>
            <div className="header_inner">
                <h1>
                    <a href="#!"> &lt;/&gt; </a>
                </h1>
                <ul>
                    <li className="active">
                        <a href="#main">1</a>
                    </li>
                    <li>
                        <a href="#about">2</a>
                    </li>
                    <li>
                        <a href="#!">3</a>
                    </li>
                </ul>
            </div>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
    color: #39ff14; // 형광 초록
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
                }

                &.active {
                    background: #39ff14;
                    color: #000;
                }
            }
        }
    }
`;

export default Header;
