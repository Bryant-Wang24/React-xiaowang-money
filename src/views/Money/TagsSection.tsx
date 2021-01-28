import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    > li {
      background: #D9D9D9;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      border-radius: 18px;
      margin: 8px 12px;

      &.selected {
        background: #f60;
      }
    }
  }
    > button {
      background: none;
      border: none;
      border-bottom: 1px solid #333;
      color: #666;
      margin-top: 8px;
      padding: 2px 4px;
    }
`;
const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags,setSelectedTags] = useState<string[]>([]);
  const onAddTag = ()=>{
    const tagName = window.prompt('新标签的名称为')
    if (tagName!==null&&tagName!==''){
      setTags([...tags,tagName])
      console.log(typeof tagName);
    }
  }
  const onToggleTag = (tag:string)=>{
    const index = selectedTags.indexOf(tag);
    if (index>=0){
    //  如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTag
      setSelectedTags(selectedTags.filter(t=>t!==tag));
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }
  const getClass = (tag:string)=>selectedTags.indexOf(tag)>=0?'selected':''
  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={()=>{onToggleTag(tag)}} className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export {TagsSection};