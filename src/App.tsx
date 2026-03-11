import Header from "./components/Header";
import Cards from "./components/Cards";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <>
      <main className="container max-w-6xl">
        <Header/>
        <Cards/>
        <CallToAction/>
      </main>
    </>
  )
}

export default App
