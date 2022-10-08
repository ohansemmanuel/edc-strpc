import { Border } from "./components";

function App() {
  return (
    <>
      <Border as="button" color="red">
        Hi!
      </Border>

      <Border color="red" width={10}>
        Hi!
      </Border>

      <Border color="green" width={10} variant="dotted">
        Hi!
      </Border>
    </>
  );
}

export default App;
