import PropTypes from "prop-types";

const userData = [
{
    name: "Eren Jaeger",
    city: "Paradis Island",
    job: "Spec-ops Scout",
    skills: ["Combat","Intellectual","Titan","Durability","Regeneration","Martial Arts"],
    state: false,
    profile: "/src/assets/images/Eren.jpg",
},
{
    name: "Light Yagami",
    city: "Tokyo",
    job: "Detective-Kira",
    skills: ["Highly Intelligent","Persuasive","Kira-God","Detective","Iron-Willed","Decision making"],
    state: true,
    profile: "/src/assets/images/Light.jpg",
},
{
    name: "Talion",
    city: "Mordor",
    job: "Ranger of Black Gate",
    skills: ["Sword Master","Bright Lord","Immortal","Nazgul","Wraith world","Leader"],
    state: false,
    profile: "/src/assets/images/Talion.jpg",
},
]

function User (props) 
{
    
    return(
        <div className="card-container">
            <span className={props.state ? "stat alive":"stat dead"}>{props.state ? "Alive":"Dead"}</span>
            <img className="pro-img" src={props.profile} alt="profile" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.job}</p>
            <div className="btn">
                <button className="primary">Message</button>
                <button className="primary outline">Follow</button>
            </div>
            <div className="skillset">
                <h6>Skills</h6>
                <ul>{props.skills.map((skill ,index)=>(<li key={index}>{skill}</li>))}</ul>
            </div>
        </div>
    );

};


export const UserCard = () => {
  return(
/*  <User >
    {{
        name: "Eren Jaeger",
        city: "Paradis Island",
        job: "Spec-ops Scout",
        skills: ["Combat","Intellectual","Titan","Durability","Regeneration","Martial Arts"],
        state: false,
        profile: "/src/assets/images/Eren.jpg",
    }}
  </User>
*/  <>
       <h1 className="title-crd">Cards:</h1>
      {userData.map((user, index)=>(<User key={index} 
        name={user.name}
        city={user.city}
        job={user.job}
        skills={user.skills}
        state={user.state}
        profile={user.profile}/>))
      }
    </>    
  )
}
User.propTypes = 
{
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    state: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,

}