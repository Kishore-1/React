import ProtoTypes from "prop-types";

export const OneofSample = (props) => {
  const {color} = props;
    return (
    <div>
        <p style={{background: color, width: "17%" }}>This World...is just...that CRUEL.</p>
    </div>
  )
}
OneofSample.protoType ={
    color: ProtoTypes.oneOf(["Red","Green","Blue"]).isRequired,
}
