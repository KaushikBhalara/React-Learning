import logo from "./logo.svg";
import "./App.css";
import questions from "./data/questions";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

const cardCloseStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "200px",
  backgroundColor: "green",
  margin: "2px",
  textAlign: "center",
  float: "left",
};

const cardOpenStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "200px",
  backgroundColor: "red",
  margin: "2px",
  textAlign: "center",
  float: "left",
};

function FlashCard() {
  const [openQuestionId, setOpenQuestionId] = useState(0);

  return (
    <>
      {questions.map((question) => (
        <div
          style={openQuestionId == question.id ? cardOpenStyle : cardCloseStyle}
          onClick={() =>
            setOpenQuestionId(question.id === openQuestionId ? 0 : question.id)
          }
        >
          <div className="card">
            <div className="card-body">
              {openQuestionId == question.id
                ? question.answer
                : question.question}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
