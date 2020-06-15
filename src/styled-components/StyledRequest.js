import styled from 'styled-components';

export const StyledRequest = styled.div`
    display: flex;
  align-items: center;
  border-radius: .5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  transition: all .2s;
  min-width: 12.8rem;

  &:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const RequestWrapper = styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    padding: .5rem 0 .5rem 1rem;
    position: relative;
    overflow: hidden;
`;

export const StyledStatusIcon = styled.div`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: .5rem;
    border: ${({isSuccess}) => isSuccess ? '1px solid #269300' : '1px solid #A62300'};
    background-color: ${({isSuccess}) => isSuccess ? '#30B800' : '#CF2C00'};  
`;

export const RequestTittle = styled.div`
    display: inline-block;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #0D0D0D;
    margin-right: 1.1rem;  
`;

export const CopyMessage = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 2rem;
    color: #0D0D0D;
    background-color: #F6F6F6;
    border-radius: .5rem;
    left: 2.2rem;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    animation: copy-fade 1s linear;
    animation-fill-mode: forwards;  
    
    @keyframes copy-fade {
  0% {
    transform: translateY(-50%);
    opacity: 1;
  }

  100% {
    transform: translateY(-180%);
    opacity: 0;
  }
}
`;

export const RequestActions = styled.div`
    width: 2rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;  
`;

export const BtnActions = styled.button`
    width: 2rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;  
`;

export const StyledDots = styled.span`
        display: block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: currentColor;
        position: relative;
        color: rgba(0, 0, 0, 0.2);
        transition: color .1s linear ;

        &:hover {
           cursor: pointer;
           color: rgba(0, 0, 0, 0.4);
        }

        &::before,
        &::after {
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: currentColor;
            position: absolute;
            left: 0;
        }

        &::before {
            top: -.7rem;
        }

        &::after {
            bottom: -.7rem;
        }
`;