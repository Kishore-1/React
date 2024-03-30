import { LearnComponent } from "./components/LearnComponent";
// import { Header } from "./components/Header";
// import { AHeroes } from "./components/AHeroes";
import "./css/App.css";
// import { ChildComponent } from "./components/ChildComponent";
// import { ArraySample } from "./components/ArraySample";
// import { OneofSample } from "./components/OneofSample";
// import { MultipleTypeComponent } from "./components/MultipleTypeComponent";
// import { FunctionSample } from "./components/FunctionSample";
function App() 
{
  const items = [
    {id: 1, name: "Attack Titan"},
    {id: 2, name: "Kira-Light"},
    {id: 3, name: "Eren Jaeger"},
    ];
    const handleClick = () =>{
      alert("He Died !");
    };
  return (
  // ONLY One Child should return from a Component
  <div className="app">  
    <LearnComponent/>
  {/* <hr></hr> */}
 
  </div>
  );

  /* We also can use <Fragment> tag instead of <DIV> (OR) Empty tags <></>

  <Fragment> 
   <div>Keep Moving Forward!!</div>
   <LearnComponent />
  </Fragment>
  <> 
    <div>Keep Moving Forward!!</div>
    <LearnComponent />
  </> 
  
  */

  

}

export default App;
