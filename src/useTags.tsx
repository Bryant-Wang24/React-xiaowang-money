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
  const updateTag = (id:number,obj:{name:string})=>{
  //  获取你要改的tag的下标
    const index = findTagIndex(id);
  //  深拷贝的tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags))
  //  把tagsClone的第index删掉，换成{id:id,name:obj.name}
    tagsClone.splice(index,1,{id:id,name:obj.name})
    setTags(tagsClone)
  }
  return {tags,setTags,findTag,updateTag,findTagIndex}
}
export {useTags}