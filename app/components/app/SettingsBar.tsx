import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import axios from "axios";
import { MdOutlineClass, MdOutlineDesignServices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiProfileLine } from "react-icons/ri";
import { GrShieldSecurity } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";

export default function SettingsBar() {
  let { t: common } = useTranslation();

  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(true);
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
    <>
      <SidebarContainer open={open}>
        <SettingsBanner src="https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_960_720.jpg" />
        <SettingsHeader>Settings</SettingsHeader>
        {offline && <OfflineError>Offline</OfflineError>}
        <SidebarWrapper>
          <NavHeading>Personal</NavHeading>
          <NavItem to="details">
            <NavItemIcon>
              <CgProfile size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>My details</NavItemName>
          </NavItem>
          <NavItem
            to="profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavItemIcon>
              <RiProfileLine size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>Profile</NavItemName>
          </NavItem>
          <NavItem
            to="security"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavItemIcon>
              <GrShieldSecurity size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>Security</NavItemName>
          </NavItem>
          <NavItem
            to="notifications"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavItemIcon>
              <IoNotificationsOutline size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>Notifications</NavItemName>
          </NavItem>
          <NavHeading>Workspace</NavHeading>
          <NavItem
            to="classes"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavItemIcon>
              <MdOutlineClass size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>Classes</NavItemName>
          </NavItem>
          <NavItem
            to="design"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavItemIcon>
              <MdOutlineDesignServices size={24} />
            </NavItemIcon>
            <NavItemName visible={open}>Design</NavItemName>
          </NavItem>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
}

const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
  width: ${({ open }: { open: boolean }) => (open ? "250" : "80")}px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid var(--orange);
  filter: drop-shadow(5px 2px 4px rgba(0, 0, 0, 0.25));
  flex-shrink: 0;
  transition: all 0.2s ease;
`;

const SettingsBanner = styled.img`
  height: 130px;
  width: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
`;

const SettingsHeader = styled.span`
  position: absolute;
  top: 40px;
  left: 0;
  font-size: 32px;
  font-weight: bold;
  color: var(--white);
  width: 100%;
  text-align: center;
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

const SidebarWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  background-color: var(--yellow);
  transition: all 0.2s ease;
`;

const NavHeading = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 0;
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
