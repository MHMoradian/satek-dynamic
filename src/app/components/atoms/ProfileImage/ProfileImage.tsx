import React from "react";
import styled from "styled-components";

type ProfileImageProps = {
  src: string;
  alt?: string;
};

const ProfileImage = (props: ProfileImageProps) => {
  return <StyledProfileImage {...props} />;
};

export default ProfileImage;

const StyledProfileImage = styled.img`
  border-radius: 50%;
`;
