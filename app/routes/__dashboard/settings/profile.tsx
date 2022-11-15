import styled from "styled-components";
import Switch from "~/components/Switch";

export default function profileRoute() {
  return (
    <ProfileContainer>
      <BannerImage src="https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg" />
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;
