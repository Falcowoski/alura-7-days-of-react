import NewsletterContent from "./NewsletterContent";
import NewsletterSubscribe from "./NewsletterSubscribe";

function Newsletter() {
    return (
        <div className="newsletter">
            <NewsletterContent 
                title="Sua casa com as"
                largeTitle="melhores plantas"
                description="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca." 
            />
            <NewsletterSubscribe inputPlaceholder="Insira seu e-mail" buttonText="Assinar newsletter" />
        </div>
    );
}

export default Newsletter;