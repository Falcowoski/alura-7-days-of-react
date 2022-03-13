import { SubscribeWrapper, Icon, Input, Button } from "./Newsletter.styled";

interface NewsletterSubscribeProps {
  inputPlaceholder: string,
  buttonText: string
}

function NewsletterSubscribe({ inputPlaceholder, buttonText }: NewsletterSubscribeProps) {
  return (
    <SubscribeWrapper>
      <Icon className="fa fa-envelope"></Icon>
      <Input type="text" placeholder={inputPlaceholder} />
      <Button>{buttonText}</Button>
    </SubscribeWrapper>
  );
}

export default NewsletterSubscribe;