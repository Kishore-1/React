import ProtoTypes from "prop-types";

export const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <div>
        <p>To Kill the person by <b className="die">DEATH NOTE</b><button className="deathwish" onClick={handleClick}><b>Click Here</b></button></p>
    </div>
  );
};
FunctionSample.protoTypes ={
    handleClick: ProtoTypes.func.isRequired,
};
