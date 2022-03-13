interface NewletterContentProps {
    title: string,
    largeTitle: string,
    description: string
}

function NewletterContent({ title, largeTitle, description }: NewletterContentProps) {
    return (
        <div className="newletter__content">
            <p className="newletter__title">{title}</p>
            <h1 className="newletter__title--large">{largeTitle}</h1>
            <p className="newletter__description">{description}</p>
        </div>
    );
}

export default NewletterContent;