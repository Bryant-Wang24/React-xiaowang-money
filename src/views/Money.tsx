import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  >ol{
    >li{
      background: #D9D9D9;
      display:inline-block;
      padding: 3px 18px;
      font-size: 14px;
      border-radius: 18px;
      margin: 8px 12px;
    }
    >button{
      background: none;
      border: none;
      border-bottom: 1px solid #333;
      color: #666;
      margin-top: 8px;
      padding: 2px 4px;
    }
  }
  
`;
const NotesSection = styled.section`
  background:#f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      width: 100%;
      height: 72px;
      background:none;
      border: none;
    }
  }
`;
const CategorySection = styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background:#feda46;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        display: block;
        height: 3px;
        background: #333333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;
const NumberPadSection = styled.section`

`;

function Money() {
  return (
    <Layout>
      <CategorySection>
        <ul>
          <li className="selected">支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
          <button>新增标签</button>
        </ol>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <NumberPadSection>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>x</button>
        <button>=</button>
        <button>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </NumberPadSection>
    </Layout>
  );
}

export default Money;