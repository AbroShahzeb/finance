import { Button } from "./components";

function App() {
  return (
    <div className="text-2xl font-medium items-center justify-center flex flex-col h-screen">
      A whole new world of changes
      <div className="flex gap-4 items-center">
        <Button label="Primary Button" />
        <Button label="Secondary Button" variant="secondary" />
        <Button label="Tertiary Button" variant="tertiary" />
        <Button label="Destroy Button" variant="destroy" />
      </div>
    </div>
  );
}

export default App;
