
export const Header = () => {
    let customCSS = "fatal";

    const chars = ["Eren","Armin","Mikasa","Reiner","Bertolt"];
  return (
    <>
     <div>
      
      <p className="Description">"After all this whole ugly story started with You!!" - <b style={{color: "RED",fontStyle: "italic"}}>Eren Jaeger</b></p>
    {/* Javascript expression in JSX */}
    {/* We can directly write inline css in jsx */}
      <p className={customCSS}>Eren's Kill count = <b>{100-20}%</b> Population.</p>
      <p>Survived Population = <b>20%</b>.</p>   
    {/* JSX with Lists */}
    <p>The List:</p>
      <ul>
        {chars.map((chars,index)=>(<li key={index}>{chars}</li>))}
      </ul>
     </div>
    </>
  )
}
