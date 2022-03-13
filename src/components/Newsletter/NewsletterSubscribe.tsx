interface NewsletterSubscribeProps {
    inputPlaceholder: string,
    buttonText: string
}

function NewsletterSubscribe({ inputPlaceholder, buttonText }: NewsletterSubscribeProps) {
    return (
        <div className="newsletter__subscribe">
            <i className="newsletter__icon fa fa-envelope"></i>
            <input type="text" className="newsletter__input" placeholder={inputPlaceholder} />
            <button className="newsletter__submit">{buttonText}</button>
        </div>
    );
}

export default NewsletterSubscribe;