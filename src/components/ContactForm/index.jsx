import { I, Form, Inputbox, Input, Span, SubmitBtn, Title,
  TextareaContainer, Inputbox2, Textarea } from './styled';

export default function ContactForm() {
  return (
    <Form action="https://formsubmit.co/guifjj92@gmail.com" method="POST">
      <Title>ENVIE UM E-MAIL</Title>
      <Inputbox>
        <Input type="text" name="name" required />
        <Span>Nome</Span>
        <I />
      </Inputbox>
      <Inputbox>
        <Input type="email" name="email" required />
        <Span>E-mail</Span>
        <I />
      </Inputbox>
      <TextareaContainer>
        <Inputbox2>
          <Textarea name="message" required />
          <Span>Deixe sua Mensagem</Span>
          <I />
        </Inputbox2>
      </TextareaContainer>
      <SubmitBtn type="submit">Enviar</SubmitBtn>
    </Form>
  );
}
