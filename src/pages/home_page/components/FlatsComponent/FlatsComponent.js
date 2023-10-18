import React from "react";
import {
    Container,
    FlatImage,
    Block,
    Section,
    Title,
    TextContainer,
    Text,
    CardName,
    CardText
} from "./FlatComponent.styles";

import flat from "./utils/flat.jpg"
import {getAllFlats} from "../../../../http/FlatHTTP";

const FlatsComponent = () => {

    const [flats, setFlats] = React.useState([]);

    React.useEffect(() => {
        getAllFlats().then(flatResponse => {
            setFlats(flatResponse);
        });
    })

    return(
        <Section>
            <Title>Open Deals</Title>
            <Container>
                {flats.map(flat => (
                    <Block>
                        <FlatImage src={flat.image}/>
                        <TextContainer>
                            <Text>
                                <CardName>{flat.name}</CardName>
                                <CardText>{flat.price} Dhr</CardText>
                                <CardText>Tiket - {flat.ticket} Dhr</CardText>
                            </Text>
                            <Text>
                                <CardText>Yield {flat.yield}%</CardText>
                                <CardText>Days left {flat.days_left}</CardText>
                            </Text>
                            <Text>
                                <CardText>Sold {flat.sold}%</CardText>
                            </Text>
                        </TextContainer>
                    </Block>
                ))}
            </Container>
        </Section>
    )
}

export default FlatsComponent;