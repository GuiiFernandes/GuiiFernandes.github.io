import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 90;
  background: rgb(50,50,50);
  background: linear-gradient(
    0deg,
    rgba(50,50,50,0) 0%,
    rgba(50,50,50,0.7567401960784313) 33%,
    rgba(50,50,50,1) 100%
  );
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: var(--max-width);
  padding-bottom: 10px;
  margin: auto;
  ul {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    align-items: center;
    max-width: 500px;
    margin: 0 20px;
    padding: 1rem 0;
    li {
      list-style: none;
      display: inline;
      text-align: center;
      a {
        text-decoration: none;
        color: var(--white);
        &:hover {
          color: var(--dark-green);
        }
      }
      .active {
        color: var(--dark-green);
        font-size: 2.5rem;
        font-weight: 700;
        text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
      }
    }
  }
`;
