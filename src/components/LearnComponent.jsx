
export const LearnComponent = () => {
  const isthisKira = true;
  const auth = isthisKira ? <p>Welcome <b>LIGHT!</b></p> : <p>OOPS!</p>
  return ( 
    <div className="flot">
    <b className="Title">Attack on Titan</b>

  {/* JSX with Conditional rendering */}
    <b className="exp">{auth}</b>

    <b className="dn">Death Note</b>
    </div>

 )
}
