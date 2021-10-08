import styled from "styled-components";
import { Link, Switch, Route } from "react-router-dom";
import { ImAppleinc } from "react-icons/im";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import MainContent from "./MainContent";
import StorePage from "./storePage/StorePage";
import LearnMore from "./learnMorePage/LearnMore";

const Navgation = (): JSX.Element => {
  return (
    <>
      <Container>
        <HeaderBox>
          <NavBox>
            <li>
              <Link to="/">
                <ImAppleinc className="icons" />
              </Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <a href="/">Mac</a>
            </li>
            <li>
              <a href="/">iPad</a>
            </li>
            <li>
              <a href="/">iPhone</a>
            </li>
            <li>
              <a href="/">Watch</a>
            </li>
            <li>
              <a href="/">TV</a>
            </li>
            <li>
              <a href="/">Music</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">
                <FiSearch className="icons" />
              </a>
            </li>
            <li>
              <a href="/">
                <FiShoppingBag className="icons" />
              </a>
            </li>
          </NavBox>
        </HeaderBox>
      </Container>
      <Switch>
        <Route path="/" exact component={MainContent}></Route>
        <Route path="/store" component={StorePage}></Route>
        <Route path="/iphone-12-pro" component={LearnMore}></Route>
        <Route path="*" render={() => <div>404</div>} />
      </Switch>
    </>
  );
};
export default Navgation;

const Container = styled.section`
  width: 100%;
`;
const HeaderBox = styled.header`
  background: rgba(0, 0, 0, 0.8);
`;
const NavBox = styled.nav`
  width: 70%;
  height: 44px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  a {
    color: #ddd;
    transition: all 0.2s;
    &: hover {
      color: #fff;
    }
  }
`;
