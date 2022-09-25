import { PolymorphicText } from "./components";

function App() {
  return (
    <>
      <PolymorphicText as="button">Hello Polymorphic!</PolymorphicText>
      <PolymorphicText as="div">Hello Polymorphic!</PolymorphicText>
      <PolymorphicText as="span">Hello Polymorphic!</PolymorphicText>
      <PolymorphicText as="em">Hello Polymorphic!</PolymorphicText>
    </>
  );
}

export default App;
