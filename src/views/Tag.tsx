import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {Input} from '../components/Input';

type Params = {
  id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 14px 16px;
  margin-top: 8px;
`

const Tag: React.FC = (props) => {
  const {findTag} = useTags();
  let {id} = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <div>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="标签名" value={tag.name}/>
        </InputWrapper>
      </div>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};
export {Tag};