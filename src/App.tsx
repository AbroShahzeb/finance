import { useState } from "react";
import { Dropdown } from "./components/dropdown";

function App() {
  const [selectedValue, setSelectedValue] = useState(
    "Select value hehejhwjerhwrfhweifrefgeiu"
  );
  return (
    <div className="text-2xl font-medium items-center justify-center flex flex-col h-screen">
      A whole new world of changes hmm
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
}

export default App;
