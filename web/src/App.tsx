import { Habit } from "./components/Habit"

function App() {

  return (
    <div>
      <h1>Hello world</h1>
      <Habit completed={3} />
      <Habit completed={2}/>
      <Habit completed={1}/>
    </div>
  )
}

export default App
