interface NewsletterContentProps {
    title: string,
    largeTitle: string,
    description: string
}

function NewsletterContent({ title, largeTitle, description }: NewsletterContentProps) {
    return (
        <div className="newsletter__content">
            <p className="newsletter__title">{title}</p>
            <h1 className="newsletter__title--large">{largeTitle}</h1>
            <p className="newsletter__description">{description}</p>
        </div>
    );
}

export default NewsletterContent;