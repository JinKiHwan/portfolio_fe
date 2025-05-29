import styled from '@emotion/styled';

const LoadingScreen = ({ loading, isStarted, onStart, progress }) => {
    if (loading) {
        return (
            <Wrapper>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                    <p>Loading... {Math.floor(progress)}%</p>
                </div>
            </Wrapper>
        );
    }

    if (!isStarted) {
        return (
            <Wrapper>
                <div className="start-container">
                    <button className="start-button" onClick={onStart}>
                        DIGIVICE START
                    </button>
                </div>
            </Wrapper>
        );
    }

    return null; // 로딩 끝났고 시작도 됐으면 아무것도 안 보이게
};

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000;
    color: #39ff14;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'D2Coding';

    .progress-container {
        text-align: center;
        width: 300px;
    }

    .progress-bar {
        height: 3px;
        background: #39ff14;
        transition: width 0.3s ease;
        margin-bottom: 10px;
    }

    .start-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .start-button {
        background: #39ff14;
        color: black;
        font-size: 24px;
        padding: 20px 40px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-family: 'D2Coding';
        box-shadow: 0 0 20px #39ff14;
        transition: all 0.3s;

        &:hover {
            background: #00cc66;
            box-shadow: 0 0 40px #00cc66;
        }
    }
`;

export default LoadingScreen;
