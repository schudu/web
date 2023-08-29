import styled from "styled-components";
import Dropdown from "~/components/dropdowns/Dropdown";
import Input from "~/components/Input";
import SchoolDropdown from "~/components/dropdowns/SchoolDropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@remix-run/react";

import { Error } from "~/styles/Globalstyles";
import Popup from "~/components/popups/popup";
import Button from "~/components/Button";

export default function notificationsSettings() {
  const { t: common } = useTranslation();
  const { t: errors } = useTranslation("error");
  const { t } = useTranslation("settings");

  const navigate = useNavigate();

  const [schools, setSchools] = useState<Array<object>>([]);
  const [selectedSchool, setSelectedSchool] = useState<object>({});
  const [globalError, setGlobalError] = useState<String>("");

  useEffect(() => {
    axios
      .get("/settings/classes/new/schools")
      .then((res) => {
        setSchools(res.data);
      })
      .catch((err) => {
        if (err.toJSON().message === "Network Error")
          return setGlobalError(errors("offline"));

        switch (parseInt(err.response.status)) {
          case 401:
            navigate("/login");
            break;
          case 500:
            setGlobalError(errors("500"));
            break;
        }
      });
  }, []);

  const handleSelect = (i: object) => {
    setSelectedSchool(i);
  };

  return (
    <NewContainer>
      <h1>{t("classes.new.new_class")}</h1>
      {globalError && <Error>{globalError}</Error>}
      <Input
        heading={t("classes.new.class_designation")}
        hint={t("classes.new.class_designation_description")}
      />
      <SchoolDropdown
        items={schools}
        onSelect={handleSelect}
        hint={t("classes.new.school_information")}
      />
      <Popup title="Testing Something" open={true} onClose={() => {}}>
        <>
          <Input heading="Name" />
          <Input heading="Country" />
          <Input heading="City" />
          <Input heading="Postal code" />
          <Input heading="Timezone" />

          <Button text="hi" primary />
        </>
      </Popup>
    </NewContainer>
  );
}

const NewContainer = styled.div`
  max-width: 350px;
`;
