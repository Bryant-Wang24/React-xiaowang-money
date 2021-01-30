import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id:createId(),name:'服饰'},
  {id:createId(),name:'餐饮'},
  {id:createId(),name:'住房'},
  {id:createId(),name:'交通'},
  {id:createId(),name:'医疗'},
  {id:createId(),name:'娱乐'}
]
const useTags = ()=>{//封装一个自定义hook
  const [tags,setTags] = useState<{id:number;name:string}[]>(defaultTags);
  const findTag = (id:number)=>tags.filter(tag=>tag.id===id)[0]
  const findTagIndex = (id:number)=>{
    let result = -1
    for (let i=0;i<tags.length;i++){
      if (tags[i].id===id){
        result = i;
        break;
      }
    }
    return result
  }
  const updateTag = (id:number,{name}:{name:string})=>{
    setTags(tags.map(tag=>tag.id?{id,name:name}:tag))
  }
  const deleteTag = (id:number)=>{
    setTags(tags.filter(tag=>tag.id!==id))
  }
  return {tags,setTags,findTag,updateTag,findTagIndex,deleteTag}
}
export {useTags}