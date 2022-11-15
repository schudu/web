import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import Button from "../Button";

interface Props {
  name: string;
  price: number;
  timespan: string;
  description: string;
  button: string;
  features: Array<Feature>;
  onClick: React.MouseEventHandler;
}

interface Feature {
  name: string;
  available: boolean;
}

export default function PriceCard({
  name,
  price,
  timespan,
  description,
  button,
  features,
  onClick,
}: Props) {
  return (
    <CardContainer>
      <Name>{name}</Name>
      <Price>${price}</Price>
      <TimeSpan>{timespan}</TimeSpan>
      <Description>{description}</Description>
      <Button onClick={onClick} text={button} />
      <FeatureList>
        {features.map(({ name, available }) => (
          <FeatureItem key={name}>
            <FeatureCheck color={available ? "var(--dark)" : "var(--light)"} />
            <FeatureName>{name}</FeatureName>
          </FeatureItem>
        ))}
      </FeatureList>
    </CardContainer>
  );
}

const CardContainer = styled("div")`
  background-color: var(--white);
  border-radius: 50px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 48%;
  }

  @media screen and (max-width: 650px) {
    width: 100%;

    & + & {
      margin-top: 2rem;
    }
  }
`;

const Name = styled.h2`
  width: 100%;
`;

const Price = styled.h1`
  font-size: 5rem;
  line-height: 3.5rem;
  margin-top: 2rem;
`;

const TimeSpan = styled.h2``;

const Description = styled.p`
  padding: 1rem 0;
  text-align: center;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem black;
  margin-top: 2rem;
  width: 100%;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  line-height: 2rem;
  width: 100%;

  & + & {
    border-top: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0,
      var(--yellow) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const FeatureCheck = styled(FaCheck)`
  margin-right: 0.5rem;
`;

const FeatureName = styled.h5``;
