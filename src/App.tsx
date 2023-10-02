//import ListGroup from "./components/ListGroup";
// import Button from "./components/Buttons";
// import Alert from "./components/Alert";
// import { useState } from "react";

import LoginForm from "./Login";

function App() {
  // let items = ["Alpha", "Bravo", "Calderetta", "Delta", "Elephant"];
  //const handleSelectItem = (item: string) => {
  //  console.log(item);
  // };
  /*
  const [alertVisible, setAlertVisibility] = useState(false);
  //!alertVisible
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );

  */
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
