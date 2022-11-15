import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import axios from "axios";
import {
  TbDashboard,
  TbCalendarEvent,
  TbSchool,
  TbSettings,
} from "react-icons/tb";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";
import { HiOutlineFolder } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { NavLink, useNavigate } from "@remix-run/react";

export default function Sidebar() {
  let { t: common } = useTranslation();

  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [offline, setOffline] = useState<boolean>(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/whoami")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.toJSON().message === "Network Error") return setOffline(true);

        switch (parseInt(err.response.status)) {
          case 401:
            navigate("/login");
          case 500:
            setOffline(true);
            break;
        }
      });
  }, []);

  return (
    <SidebarContainer open={open}>
      {offline && <OfflineError>Offline</OfflineError>}
      <LogoDetails style={{ marginTop: offline ? "10px" : "0" }}>
        <LogoWrapper>
          <Logo
            src="/images/logo.svg"
            alt="LOGO"
            onClick={() => setOpen(!open)}
          />
        </LogoWrapper>
        <LogoName visible={open}>Schudu</LogoName>
      </LogoDetails>
      <NavItem to="dashboard">
        <NavItemIcon>
          <TbDashboard size={24} />
        </NavItemIcon>
        <NavItemName visible={open}>{common("dashboard")}</NavItemName>
      </NavItem>
      <NavItem
        to="homework"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <NavItemIcon>
          <BsJournalBookmarkFill size={24} />
        </NavItemIcon>
        <NavItemName visible={open}>{common("homework")}</NavItemName>
      </NavItem>
      <NavItem
        to="calendar"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <NavItemIcon>
          <TbCalendarEvent size={24} />
        </NavItemIcon>
        <NavItemName visible={open}>{common("calendar")}</NavItemName>
      </NavItem>
      <NavItem
        to="quiz"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <NavItemIcon>
          <MdOutlineQuiz size={24} />
        </NavItemIcon>
        <NavItemName visible={open}>{common("quizzes")}</NavItemName>
      </NavItem>
      <NavItem
        to="files"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <NavItemIcon>
          <HiOutlineFolder size={24} />
        </NavItemIcon>
        <NavItemName visible={open}>{common("files")}</NavItemName>
      </NavItem>
      <ProfileItem onClick={() => setProfileOpen(!profileOpen)}>
        <ProfileItemIcon>
          <CgProfile size={24} />
        </ProfileItemIcon>
        <ProfileItemName visible={open}>{common("profile")}</ProfileItemName>
      </ProfileItem>
      <ProfilePopup visible={profileOpen && !offline}>
        <ProfileUserInfoWrapper>
          <ProfileUserInfoAvatar src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_960_720.jpg" />
          <ProfileUserInfoContainer>
            <b>{user.username}</b>
            <small>
              {user.firstname} {user.lastname}
            </small>
          </ProfileUserInfoContainer>
        </ProfileUserInfoWrapper>
        <small>{user.email}</small>
        <ClassHeading>Classes:</ClassHeading>
        <ClassesContainer>
          <Class className="selected">
            <ClassIcon size={18} />
            4chif19
          </Class>
          <Class className="">
            <ClassIcon size={18} />
            3chif20
          </Class>
          <Class className="">
            <ClassIcon size={18} />
            3dhif20
          </Class>
        </ClassesContainer>
        <SettingContainer to="settings" onClick={() => setProfileOpen(false)}>
          <TbSettings size={20} />
          Settings
        </SettingContainer>
      </ProfilePopup>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
  width: ${({ open }: { open: boolean }) => (open ? "250" : "80")}px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--yellow);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  flex-shrink: 0;
  transition: all 0.2s ease;
`;

const OfflineError = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 25px;
  background-color: red;
  text-align: center;
  font-weight: bold;
`;

const LogoDetails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  height: 50px;
`;

const LogoName = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: "Bungee", "Nunito", sans-serif;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? "1" : "0")};
  transition: all 0.4s ease;
`;

const NavItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover,
  &.active {
    background-color: var(--orange);
  }
`;

const NavItemIcon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 50px;
`;

const NavItemName = styled.div`
  font-weight: 500;
  font-size: 18px;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? "1" : "0")};
  transition: all 0.4s ease;
`;

const ProfileItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  align-items: center;
  cursor: pointer;
  margin-top: auto;
  overflow: hidden;
`;

const ProfileItemIcon = styled.div`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 50px;
`;

const ProfileItemName = styled.div`
  font-weight: 500;
  font-size: 18px;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? "1" : "0")};
  transition: all 0.4s ease;
`;

const ProfilePopup = styled.div`
  position: absolute;
  /* left: ${({ visible }: { visible: boolean }) => (visible ? "10px" : "0")};
  bottom: ${({ visible }: { visible: boolean }) => (visible ? "80px" : "30px")};
  width: ${({ visible }: { visible: boolean }) => (visible ? "200px" : "0")};
  height: ${({ visible }: { visible: boolean }) =>
    visible ? "250px" : "0"}; */
  left: ${({ visible }: { visible: boolean }) => (visible ? "10px" : "-200%")};
  bottom: 80px;
  width: 200px;
  background-color: var(--white);
  border-radius: 15px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  padding: 15px;
  opacity: ${({ visible }: { visible: boolean }) => (visible ? "1" : "0")};
  overflow: hidden;
  /* pointer-events: ${({ visible }: { visible: boolean }) =>
    visible ? "initial" : "none"}; */
  transition: all 0.4s ease;
`;

const ProfileUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileUserInfoAvatar = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 100%;
`;

const ProfileUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
`;

const ClassHeading = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
`;

const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const Class = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.4s ease;

  &.selected {
    color: var(--orange);
  }
`;

const ClassIcon = styled(TbSchool)`
  div.selected > & {
    fill: var(--orange);
    stroke: var(--orange);
    color: var(--orange);
  }
  transition: all 0.4s ease;
`;

const SettingContainer = styled(NavLink)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  cursor: pointer;
`;
