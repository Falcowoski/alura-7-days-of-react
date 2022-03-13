import styled from "styled-components";

export const Wrapper = styled.div`
  width: 36rem;
  height: 29rem;
  margin-top: 9.4rem;
  margin-left: 10rem;
  color: #202020;
`;

export const ContentWrapper = styled.div`
  margin-bottom: 1.25rem;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  opacity: 0.5;
`;

export const LargeTitle = styled.h1`
  font: 900 5.125rem 'Elsie Swash Caps', sans-serif;
`;

export const Description = styled.p`
  width: 30rem;
  margin-top: 1.5rem;
  line-height: 26px;
  opacity: 0.5;
`;

export const SubscribeWrapper = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
`;

export const Icon = styled.i`
  padding: 1.8rem 1rem;
  text-align: center;
  opacity: 0.3;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
  opacity: 0.3;
  transition: 0.2s;

  &:focus {
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 55%;
  padding: 1rem 1.5rem;
  border: none;
  color: #ffffff;
  background-color: #FFCB47;
  cursor: pointer;
  opacity: 0.9;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
