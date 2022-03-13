interface NewletterSubscribeProps {
    inputPlaceholder: string,
    buttonText: string
}

function NewletterSubscribe({ inputPlaceholder, buttonText }: NewletterSubscribeProps) {
    return (
        <div className="newletter__subscribe">
            <i className="newletter__icon fa fa-envelope"></i>
            <input type="text" className="newletter__input" placeholder={inputPlaceholder} />
            <button className="newletter__submit">{buttonText}</button>
        </div>
    );
}

export default NewletterSubscribe;