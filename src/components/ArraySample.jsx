import ProtoTypes from "prop-types";

export const ArraySample = (props) => {
    const {items}=props; //Array Destructuring
  return (
    <div>
        <h2>Antogonists:</h2>
         <ul className="Anto">
            {items.map((item)=>(<li key={item.id}>{item.name}</li>))}
         </ul>
    </div>
  )
}

ArraySample.propTypes = {
    items: ProtoTypes.arrayOf(
        ProtoTypes.shape({
            id: ProtoTypes.number.isRequired,
            name: ProtoTypes.string.isRequired,    
        })
    ).isRequired,
};