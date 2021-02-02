import styled from "styled-components"

export const Container = styled.div`
display: block;
font-family: "Roboto";
font-size: 15px;
color: #334680;
line-height: 30px;

  ul {
      padding-left: 0;
  }

@media (min-width: 1114px) {
    display: grid;
    grid-template-columns: 20% 80%;
    column-gap: 200px;
    max-width: 1114px;
    margin: 50px;
}
`;
export const Link = styled.a`
    font-size: 14px;
    color: #1e86ff;
`;

export const Image = styled.img`
width: 100%;
`;
export const Heading = styled.h2`
    color: #b9bdcf;
    text-transform: uppercase;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-top: 36px;
`;
export const Title = styled.h3`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.8rem;
    margin-bottom: 4px;
    color: #334680;
    margin-top: 0;
    padding-right: 30px;
`;
export const SubTitle = styled.h4`
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
    padding: 10px;
    margin: 0;

`;
export const Button = styled.button`
    padding: 8px;
    border: 1px solid #334680;
    border-radius: 4px;
    align-self: start;
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #334680;
    font-weight: 700;
`;
export const Span = styled.span`
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: #b9bdcf;
    padding: 10px;
`;
export const LogoFrame = styled.div`
    display: grid;
    grid-template-columns: 100px 300px;
    column-gap: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    align-items: center;
`;
export const TitleFrame = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 1114px) {
    flex-direction: row;
    align-items: center;
}
`;