import Card from './Card';
import { Container, SwitchContainer } from './styles/Container.styles';
import Switch from './Switch';

const Tutorial = () => {
    return (
        <Container>
            <SwitchContainer>
                <Switch />
            </SwitchContainer>
            <Card />
        </Container>
    )
}

export default Tutorial;
