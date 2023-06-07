import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Btn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:${({ theme }) => theme.space[3] + 'px'};

  min-width: 165px;
  max-width: 165px;
  min-height: 40px;
  padding: ${({ theme }) => theme.space[1] * 3 + 'px'};

  font-family: ${({ theme }) => theme.main.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color:${({ theme }) => theme.colors.yellow};

  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 40px;

  transition: color 350ms ${({ theme }) => theme.transition.main},
  background-color 350ms ${({ theme }) => theme.transition.main};

  &.active {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: #fef9f9;

    & svg{
        fill: #fef9f9;
    }
  }
  &:hover,
  &:focus{
    color: #fef9f9;
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  & svg {
    fill:${({ theme }) => theme.colors.yellow};

    transition: fill 350ms ${({ theme }) => theme.transition.main};

  }

  &:hover svg,
  &:focus svg{
    fill: #fef9f9;
  }
`;