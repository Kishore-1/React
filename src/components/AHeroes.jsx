import PropTypes from "prop-types";
export const AHeroes = (props) => {
  return (
    <div className="proto">
        <h5>Anti-Hero:</h5>
        <table className="tab">
            <tbody>
            <tr>
                <th>Name:</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age :</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Alive:</th>
                <td>{props.isAlive ? "Yes":"NO"}</td>
            </tr>
            </tbody>
        </table>
    </div>

  )
}
//PropTypes for datatype validation
AHeroes.propTypes ={
    name: PropTypes.string,
    age:  PropTypes.number,
    isAlive: PropTypes.bool,   
}
//Default props incase no input given
AHeroes.defaultProps ={
    name: "No Name",
    age: 0,
    isAlive: true,
}