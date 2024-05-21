import styled, { css } from 'styled-components';

import { ButtonPropsStyles } from '.';

import { Button } from 'antd';

export const ButtonCommon = styled(Button)<ButtonPropsStyles>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  cursor: pointer;
  color: ${(props) => props?.color || props?.theme?.colors?.primaryColor};
  border-radius: 999px;
  font-size: ${(props) => props.fontSize || props.theme.fontSize.base};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.bold};
  line-height: 1.6;
  transition: all 0.3s;
  height: auto;
  background-color: '#060807';
  &::before {
    content: unset;
    display: none;
  }

  ${(props) =>
    props.modify === 'outline' &&
    `

    position: relative;
    span {
      position: relative;
      z-index: 2;
    }

    &::after {
      content: '';
      position: absolute;
      z-index:1;
      inset: 3px;
      border-radius: 999px;
      background-color: #000
    }
    `}

  &:not(:disabled):hover {
    border-color: ${({ theme }) => theme?.colors?.buttonActive};
    box-shadow: 0 0 5px 0 ${({ theme }) => theme?.colors?.shadowColor};
    border: none;
  }

  &:active,
  &.active {
    border-color: ${({ theme }) => theme?.colors?.buttonActive};
  }

  &:disabled {
    color: ${({ theme }) => theme?.colors?.textColor};
    border-color: ${({ theme }) => theme?.colors?.buttonDisable};
  }

  &.ant-btn-link {
    padding: 0;
    border: none;
    text-decoration: underline;
    &:not(:disabled):hover {
      border-color: none;
      box-shadow: none;
    }
  }

  &.ant-btn-ghost {
    /* background-color: ${({ theme }) => theme?.colors?.other?.background1}; */
    border: 1px solid ${({ theme }) => theme?.colors?.other?.background1};
    padding: 8px 12px;
    gap: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    align-items: center;
    height: 42px;
    color: ${({ theme }) => theme?.colors?.other?.text1};

    &:not(:disabled):hover {
      background: transparent;
      color: ${({ theme }) => theme?.colors?.other?.text1};
      border: 1px solid ${({ theme }) => theme?.colors?.primaryColor};
    }
  }

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}

  ${(props) =>
    props.width &&
    css`
      max-width: ${props.width};
      width: 100%;
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}

  &.ant-btn-primary {
    border: none;
    box-shadow: none;
    color: #060807;
    background: #c6f57a;
    background-color: #c6f57a;
    background-size: 300% auto;
    background-position: right;
    transition-duration: 500ms;
  }

  &.ant-btn-primary:hover {
    color: #060807;
    background-position: left;
  }

  &.ant-btn-primary:active,
  &.ant-btn-primary.active {
    background: ${({ theme }) => theme?.colors?.buttonActive};
  }

  &.ant-btn-primary:disabled {
    color: #fff;
    background: ${({ theme }) => theme?.colors?.buttonDisable} !important;
  }

  &.ant-btn-default {
    position: relative;
    /* border: 1px solid #ffffff14; */
    border: none;
    background-image: linear-gradient(80deg, #000 20%, #c6f57a, #e8ffc3);
    background-size: 200% 200%;
    background-position: 1% 0;
    transition-duration: 400ms;
    color: #fff;

    > div {
      position: relative;
      z-index: 2;
    }

    :hover {
      box-shadow: 0px 4px 50px 0px #c6f57a66, 0px 0px 12px 0px #ffffff33;
      background-position: 90% 90%;
      color: #fff;
    }

    &::before {
      display: block;
      position: absolute;
      content: '';
      inset: 1px;
      background-color: #060807;
      z-index: 1;
      border-radius: 999px;
    }

    /* &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: ${({ theme }) => theme?.radius?.normalRadius};
      border: 1px solid transparent;
      background: ${(props) =>
      props.backgroundColor || props.theme?.colors?.buttonGradient}
        border-box;
    } */

    span {
      background: ${(props) =>
        props.backgroundColor || props.theme?.colors?.buttonGradient};
      background-clip: text;
      color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      ${({ $iconBefore }) =>
        $iconBefore &&
        css`
          &::before {
            content: '${$iconBefore}';
            font-size: 130%;
            margin-right: 8px;
            line-height: 100%;
          }
        `}
    }

    .anticon {
      color: inherit;
    }
  }
`;
