import NewletterContent from "./NewletterContent";
import NewletterSubscribe from "./NewletterSubscribe";

function Newletter() {
    return (
        <div className="newletter">
            <NewletterContent 
                title="Sua casa com as"
                largeTitle="melhores plantas"
                description="Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca." 
            />
            <NewletterSubscribe inputPlaceholder="Insira seu e-mail" buttonText="Assinar newletter" />
        </div>
    );
}

export default Newletter;