import React from "react";
import styled from "styled-components";
import Project from "../Project/Project";
import todos from "../img/todos.png";
import form from "../img/form.png";
import gobang from "../img/gobang.png";
import blog from "../img/blog.png";
import { MEDIA_QUERY_MD } from "../../constans/style"


const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
`
const Title = styled.h1`
`

const Row = styled.div`
  display: flex;
  justify-content: space-around;

  ${MEDIA_QUERY_MD} {
    flex-direction: column
  }
`

export default function Context() {
  return (
    <Wrapper>
      <Title>Alan 作品集</Title>
      <Row>
        <Project imgSrc={todos} projectLink={"https://alanyen0202.github.io/react-todolist"} soureceCodeLink={"https://github.com/ALANYEN0202/react-todolist"} title={"Todo List"}>
          <div>使用 React，Vanilla JS</div>
          <div>引入 BootstrapStyle</div>
          <div>localStorage 存放資料，重新整理不會消失</div>
        </Project>
        <Project imgSrc={form} projectLink={"https://alanyen0202.github.io/react-form/"} soureceCodeLink={"https://github.com/ALANYEN0202/react-form"} title={"React Form"}>
          <div>React hooks，熟悉如何在 React 中操作表單元件，並且建立 controlled component，將 state 與 input 元件互相綁定，以 state 為核心來控制元件。</div>
        </Project>
        <Project imgSrc={gobang} projectLink={"https://alanyen0202.github.io/react-gobang/"} soureceCodeLink={"https://github.com/ALANYEN0202/react-gobang"} title={"五子棋遊戲"}>
          <div>使用 React hooks 學習設定 state、傳遞 props</div>
          <div>styled-components</div>
          <div>此遊戲是根據 React 官網實作</div>
        </Project>
        <Project imgSrc={blog} projectLink={"https://alanyen0202.github.io/react-blog"} soureceCodeLink={"https://github.com/ALANYEN0202/react-blog"} title={"React Blog"}>
            <div> React Hook</div>
            <div>Router 做換頁 、createContext、useContext 使用者的驗證功能</div>
            <div>簡易 API 串接</div>
        </Project>
      </Row>
    </Wrapper>
  )
}
