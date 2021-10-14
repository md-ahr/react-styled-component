import Button from './Button';
import nerdImage from '../assets/images/img_nerd.png';
import { CardContainer, ContentContainer, ButtonContainer } from './styles/Container.styles';
import { Tag, H1, P , Image } from './styles/Elements.styles';
import { StyledTitle } from './styles/Custom.styles';

const Card = () => {

    return (
        <CardContainer>
            <ContentContainer>
                <Tag bgColor="#4361ee">EXCLUSIVE</Tag>
                <H1>
                    <StyledTitle text="React Styled Components" />
                </H1>
                <P>Exclusive React JS Tutorial on Styled Components where you will learn why we need this and how to use it.</P>
                <ButtonContainer>
                    <Button link="http://lwsbd.link/rsc" text="Watch Now" />
                    <Button link="http://lwsbd.link/react" text="Github Repo" />
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}

export default Card;
