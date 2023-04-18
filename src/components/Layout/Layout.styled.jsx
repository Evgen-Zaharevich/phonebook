import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GiBookmark } from 'react-icons/gi';

export const Icon = styled(GiBookmark)`
  margin-right: 10px;
`;

export const AppContainer = styled.div`
  padding-bottom: 10px;
  width: 100%;
  background-position-y: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://kartinkin.net/uploads/posts/2021-07/thumbs/1627596321_20-kartinkin-com-p-potertaya-kraska-tekstura-krasivo-22.jpg);
`;

export const Header = styled.header`
  margin: 0 20px;
  border-bottom: 3px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const LogoLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 10px 20px;
  position: relative;
  font-size: 30px;
  color: black;
  font-family: 'Tangerine', cursive;
  font-size: 70px;
  font-weight: 700;
  transition: 0.4s;

  &:hover {
    color: #fc0;
    text-shadow: black 1px 1px 1px;
  }
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid black;
  color: black;
  font-family: 'Tangerine', cursive;
  font-size: 40px;
  font-weight: 700;
  transition: 0.4s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }

  &:hover:after {
    border-color: black;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }

  &:hover {
    color: #fc0;
    text-shadow: black 1px 1px 1px;
  }
`;
