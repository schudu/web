import styled from "styled-components";
import Switch from "~/components/Switch";

export default function notificationsSettings() {
  return (
    <NotificationContainer>
      <BannerImage src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png" />
      <SettingsWrapper>
        <h1>Notifications</h1>
        <Description>
          We try to burden them as little as possible with notifications.
          Therefore, you can customize all here!
        </Description>
        <SettingsCategory>
          <div>
            <h4>Emails</h4>
            <span>
              Wie would send you an Email when a activated notification occurs.
            </span>
          </div>
          <div>
            <SettingItem>
              <Switch value={false} onChange={() => {}} />
              <p>News and Updates</p>
            </SettingItem>
          </div>
        </SettingsCategory>
      </SettingsWrapper>
    </NotificationContainer>
  );
}

const NotificationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: cover;
`;

const SettingsWrapper = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 15px;
`;

const Description = styled.small`
  color: var(--light);
`;

const SettingsCategory = styled.div`
  width: 100%;
  border-top: 1px solid var(--light);
  margin-top: 15px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SettingItem = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 15px;
`;
