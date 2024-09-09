import "./style.css";

const obj = {
  name: "Dipankar Ganguly",
  description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum alias quae architecto animi rerum, vero corporis optio fugit suscipit blanditiis, repellat id quia, minus odio impedit voluptatum atque in! Dolorem.",
  skills: ["HTML+CSS","JavaScript","Java","Backend","Frontend"],
  skillsBtnColors: ["#a7ff1a","yellow","red","cyan","orange"],
  imageLink: "../public/avatar.jpg"
}

function App() {

  return (
    <div className="card">
      <Avatar imageLink={obj.imageLink}/>
      <div className="data">
        <Intro name={obj.name} description={obj.description}/>
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={obj.skills} colors={obj.skillsBtnColors}/>
      </div>
    </div>
  )
}
function Avatar({imageLink}) {
  return <img src={imageLink} alt="" className="avatar"/>
}
function Intro({name,description}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}
function SkillList({skills,colors}) {
  return (
    <div className="skill-list">
      {skills.map((val,i)=>{return (
        <button key={i} className="skill" style={{backgroundColor:`${colors[i]}`}}>{val}</button>
      )})}
    </div>
  )
}

export default App;
