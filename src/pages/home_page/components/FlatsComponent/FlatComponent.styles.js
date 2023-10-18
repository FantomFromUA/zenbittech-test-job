import styled from "styled-components";

export const Section = styled.div`
  padding: 50px;
`

export const Title = styled.h2`
  color: #AF9F81;
  font-size: calc(2vw + 0.5rem);
  
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`

export const Block = styled.div`
  flex: 40%;
  width: 100%;
  margin-bottom: 20px;
  position: relative;

`

export const FlatImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  filter: brightness(80%);
`

export const TextContainer = styled.div`
  position: absolute;
  top: 65%;
  color: white;
  width: 100%;
  height: 30%;
  padding: 10px;
  display: flex;
  align-items: end;
`

export const Text = styled.div`
  flex: 33%;
`

export const CardName = styled.h4`
  font-size: calc(1.2vw + 0.3rem);
  margin: 0;
`

export const CardText = styled.h4`
  font-size: calc(1vw + 0.2rem);
  margin: 0;
`