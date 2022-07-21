import { Box } from "@chakra-ui/react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Box as="button" borderRadius="md" bg="tomato" color="white" px={4}>
          This is a Box component with an 'as' prop
        </Box>
      </header>
    </div>
  );
}

export default App;
