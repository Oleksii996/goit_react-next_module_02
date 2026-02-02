// src/components/App.tsx

export default function App() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
    console.log("Target:", event.target); // сам <button>
  };

  return <button onClick={handleClick}>Click me!</button>;
}
