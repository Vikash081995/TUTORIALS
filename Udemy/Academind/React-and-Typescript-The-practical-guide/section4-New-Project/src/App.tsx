import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave}>
        <Input label="Test" id="test" ref={inputRef} />
        <Input id="name" label="Your Name" type="number" />
        <Input id="age" label="Your Age" type="text" />
        <Button>A Button</Button>
        <Button href="www.google.com">A Link</Button>
        <Container as={Button}>Click ME</Container>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
