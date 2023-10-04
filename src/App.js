import "./App.css";
import Header from "./compnent/Header/Header";
import MovisContainer from "./compnent/MovisContainer/MovisContainer";
// import { Requests, getContent } from "./utils/api-request";


function App() {
  // const result = getContent(Requests.Popular);
  // console.log(result);

  return (
    <div className="App">
      <Header/>
      <MovisContainer />
    </div>
  );
}

export default App;
