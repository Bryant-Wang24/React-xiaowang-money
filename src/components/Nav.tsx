import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/chart.svg')
require('icons/money.svg')
require('icons/tag.svg')


const NavWrapper = styled.div`
  border: 1px solid blue;
  >ul{
    display: flex;
    >li{
      width: 33.33333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4px 0;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const Nav =()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          <svg fill="red" className="icon">
            <use xlinkHref="#tag"/>
          </svg>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <svg fill="" className="icon">
            <use xlinkHref="#money"/>
          </svg>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <svg fill="" className="icon">
            <use xlinkHref="#chart"/>
          </svg>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;