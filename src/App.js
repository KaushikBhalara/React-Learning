import logo from "./logo.svg";
import "./App.css";
import data from "./data";

const skillStyle = {
  backgroundColor: "green",
  display: "inline-block",
  padding: "0 20px 0 20px",
  margin: "2px",
  borderRadius: "5px",
  color: "white",
};

function App() {
  return (
    <div className="App">
      <div className="container ">
      <div className="row">
      {data.map((developer) => (
      <DeveloperDetail developer={developer} key={developer.name}></DeveloperDetail>
      ))}
    </div>
    </div>
    </div>
  );
}

function DeveloperDetail({developer})
{
  return(
  <div className="col ">
  <div class="card" style={{ width: "18rem" }}>
    <img src={developer.img} class="card-img-top" alt="..." />
    <div className="card-body">
      <p className="card-text">
        <p>{developer.name}</p>
        {developer.description}
        <p>
          {developer.skills.map((skill) => (
           <Skill skill={skill} key={skill.skill}/>
          ))}
        </p>
      </p>
    </div>
  </div>
</div>);
}

function Skill({skill})
{
  return(
  <div style={skillStyle}>
  <span>
    {skill.skill}
    {skill.level === "beginner"
      ? "😊"
      : skill.level === "intermediate"
      ? "😂"
      : "🤣"}
  </span>
</div>);
}

export default App;
