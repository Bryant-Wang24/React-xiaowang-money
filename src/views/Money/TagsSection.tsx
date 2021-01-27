import styled from 'styled-components';

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;display: flex;flex-direction: column;
  justify-content: flex-end;align-items: flex-start;
  > ol {
    > li {
      background: #D9D9D9;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      border-radius: 18px;
      margin: 8px 12px;
    }

    > button {
      background: none;
      border: none;
      border-bottom: 1px solid #333;
      color: #666;
      margin-top: 8px;
      padding: 2px 4px;
    }
  }
`;
export {TagsSection};