import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledDiv = styled.div`
  padding: 10px;
`;
const BlockPicture = ({picture}: { picture: string }) => {

  return (
    <StyledDiv>
      {picture ? (
        <StyledImage src={picture} alt="cat" />
      ) : (
        <p>No cat image found.</p>
      )}
    </StyledDiv>
  );
};

export default BlockPicture;
