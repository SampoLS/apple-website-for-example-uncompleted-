import styled from "styled-components";

import Banner from "../../components/Banner";

// this is learn more component
const LearnMore = (props: object):JSX.Element => {
  console.log(props)
  return (
    <>
      <Banner/>
      <main>
        <Wrapper>
          <div>Save on your new iPhone with special carrier deals at Apple. Find your deal</div>
        </Wrapper>
      </main>
    </>
  )
}
export default LearnMore;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f5f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  color: #666;
`;