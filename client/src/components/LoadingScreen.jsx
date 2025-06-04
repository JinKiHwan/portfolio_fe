import styled from '@emotion/styled';

const LoadingScreen = () => {
    return <Wrapper className="loading"></Wrapper>;
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 9;
`;

export default LoadingScreen;
