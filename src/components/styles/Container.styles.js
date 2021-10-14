import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    background: ${(props) => props.theme.wrapperBackground};
    width: 100%;
    height: 100vh;
`;

export const CardContainer = styled.div`
    position: relative;
    background: ${(props) => props.theme.cardBackground};
    height: 350px;
    width: 550px;
    overflow: hidden;
    display: flex;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 215px;
    position: absolute;
    left: 20px;
    z-index: 3;
`;

export const TagContainer = styled.div`
    display: inline-block;
    color: ${(props) => props.theme.tagColor};
    background: ${(props) => props.theme.tagBackground};
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 10px;

    & a {
        display: inline-block;
        overflow: hidden;
        position: relative;
        font-size: 11px;
        color: ${(props) => props.theme.buttonAColor};
        text-decoration: none;
        padding: 10px 15px;
        border: 1px solid ${(props) => props.theme.buttonABontColor};
        font-weight: bold;

        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: -10px;
            width: 0%;
            background: ${(props) => props.theme.buttonAAfterBackgroundColor};
            height: 100%;
            z-index: -1;
            transition: width 0.3s ease-in-out;
            transform: skew(-25deg);
            transform-origin: right;
        }

        &:hover {
            color: ${(props) => props.theme.buttonAHoverColor};
            transition: all 0.5s ease;

            &:after {
                width: 150%;
                left: -10px;
                transform-origin: left;
            }
        }

        &:nth-of-type(1) {
            border-radius: 50px 0 0 50px;
            border-right: none;
        }

        &:nth-of-type(2) {
            border-radius: 0px 50px 50px 0;
        }
    }
`;

export const SwitchContainer = styled.label`
    position: absolute;
    top: 3%;
    right: 2%;
    display: inline-block;
    width: 70px;
    height: 35px;

    & input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
            background-color: #2196F3;
        }

        &:focus + .slider {
            box-shadow: 0 0 1px #2196F3;
        }

        &:checked + .slider:before {
            -webkit-transform: translateX(36px);
            -ms-transform: translateX(36px);
            transform: translateX(36px);
        }
    }

    & .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }

        &.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }
    }
`;
