import { SetStateAction, useState } from "react";
import { RoutesMain as Routes } from "./routes/Routes";

function App() {
  const [state, setState] = useState(false);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
