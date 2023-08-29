import styled from "styled-components";

export default function notificationsSettings() {
  return (
    <ClassesContainer>
      <h1>Classes ha</h1>
      <VerticalNavbar>
        <NavItem>Overview</NavItem>
        <NavItem>Students</NavItem>
        <NavItem>Admins</NavItem>
        <NavItem>Teachers</NavItem>
        <NavItem>Homeworks</NavItem>
      </VerticalNavbar>
    </ClassesContainer>
  );
}

const ClassesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const VerticalNavbar = styled.nav`
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
