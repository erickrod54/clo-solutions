import React from "react";
import { useCloContext } from "../context";
import styled from "styled-components";

const SocialComponent = () => {
  const { brandIcons } = useCloContext();
  console.log("brandIcons ==>", brandIcons);

  return (
    <SocialSection id="social-brands">
      <h1>Find me in</h1>
      <SocialWrapper>
        <ul className="social-brands--icons">
          {brandIcons.map((icon) => {
            const { id, socialicons, url } = icon;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className={`fab ${socialicons}`}>{socialicons}</i>
                </a>
              </li>
            );
          })}
        </ul>
      </SocialWrapper>
    </SocialSection>
  );
};

const SocialSection = styled.section`
  h1 {
    margin-bottom: 2rem;
  }
`;

const SocialWrapper = styled.div`
  .social-brands--icons {
    margin: 2rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 1rem;
    font-size: 7rem;
  }

  a {
    display: inline-block;
    background-color: var(--color-quarternary-dark);
    border-radius: 50%;
    padding: 2rem;
    color: var(--color-primary);
    box-shadow: 0.5rem 0.5rem 2rem 0.5rem var(--color-quarternary),
      -0.5rem -0.5rem 2rem 0.5rem var(--color-secondary-light);
    transform: scale(2);
    animation: social 6s linear infinite;
  }

  i {
    font-size: 4rem;
  }

  @keyframes social {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
      transform: scale(1.2);
    }

    100% {
      opacity: 0;
    }
  }
`;

export default SocialComponent;
