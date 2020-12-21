import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../../constans/style"


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
`
const Text = styled.span`
  font-weight: bold;
`

const Link = styled.a`
  text-decoration: none;
  color: #007bff;
`

export default function Footer() {
  return (
    <Wrapper>
      <Text><Link href="https://github.com/Lidemy/mentor-program-4th">Mentor Program 4nd</Link>, created by <Link href="https://github.com/Lidemy/mentor-program-4th-ALANYEN0202">ALANYEN0202</Link></Text>
    </Wrapper>
  )
}
