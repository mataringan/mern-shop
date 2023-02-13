import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0b467c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $70</Container>;
};

export default Announcement;
