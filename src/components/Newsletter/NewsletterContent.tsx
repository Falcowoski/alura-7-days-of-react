import { ContentWrapper, Title, LargeTitle, Description } from "./Newsletter.styled";

interface NewsletterContentProps {
    title: string,
    largeTitle: string,
    description: string
}

function NewsletterContent({ title, largeTitle, description }: NewsletterContentProps) {
    return (
        <ContentWrapper>
            <Title>{title}</Title>
            <LargeTitle>{largeTitle}</LargeTitle>
            <Description>{description}</Description>
        </ContentWrapper>
    );
}

export default NewsletterContent;