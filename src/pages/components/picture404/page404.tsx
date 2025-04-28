import page404 from "../../../assets/page_404.jpg";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Page404 = () => {
  return <StyledImage src={page404} alt="404" />;
};

export default Page404;
