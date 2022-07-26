import logo from "./logo.svg";
import { List, ListItem, ListItemText } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>List component rendered as a "nav" element</p>

        <List
          component="nav" // change this eg., from nav to "ol"
          style={{
            border: "1px solid red",
          }}
        >
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About us" />
          </ListItem>
        </List>
      </header>
    </div>
  );
}

export default App;
