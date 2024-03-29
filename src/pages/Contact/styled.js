import styled from 'styled-components';

export const IFrame = styled.iframe`
  width: 100%;
  max-width: 500px;
  height: 500px;
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.6);
`;

export const Main = styled.main`
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ALink = styled.a`
  margin: 1rem;
  color: var(--white);
  font-size: 4.5rem;
  &:hover {
    transform: scale(1.2);
    transition: scale 0.2s ease-in;
    color: var(--dark-green);
  }
`;

export const H2 = styled.h2`
  width: 100%;
  margin: 0px;
  text-align: center;
  font-size: 3rem;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
