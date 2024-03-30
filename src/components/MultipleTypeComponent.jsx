import ProtoTypes from "prop-types";

export const MultipleTypeComponent = (props) => {
  return (
    <div>{props.value}</div>
  )
}

MultipleTypeComponent.protoType ={
    value: ProtoTypes.oneOfType([
        ProtoTypes.string,ProtoTypes.number,ProtoTypes.bool]
        ).isRequired,
}