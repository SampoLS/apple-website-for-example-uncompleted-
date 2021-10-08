import styled from "styled-components";

// this is learn more component
const Banner = ():JSX.Element => {
  return (
    <Wrapper>
      <InnerBanner>
        <div>
          <h3>iPhone 13 Pro</h3>
        </div>
        <RightBox>
          <span>Overview</span>
          <a href="/">Tech Specs</a>
          <button>Buy</button>
        </RightBox>
      </InnerBanner>
    </Wrapper>
  )
}
export default Banner;

const Wrapper = styled.section`
  width: 100%;
  height: 52px;
  background-color: white;
  position: sticky;
  box-shadow: 0 1px 1px #ddd;
  left: 0;
  top: 0;
  right: 0;
`;
const InnerBanner = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  font-family: poppins;

  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`;
const RightBox = styled.div`
  width: 250px;
  max-width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #999;
  }

  button {
    border: none;
    outline: none;
    background-color: #147ce5;
    padding: 5px 15px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 12px;
    color: white;
    cursor: pointer;
  }
`;