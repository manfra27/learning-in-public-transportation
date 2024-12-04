import React, { useState } from "react";
import { db } from './db.js';
import './App.css';

const mapTopicsAndEntries = (db) => {
  return db.map((topic) => ({
    topicName: topic.topicName,
    entries: topic.entries.map((entry) => ({
      id: entry.id,
      question: entry.question,
      options: entry.options,
      correctAnswer: entry.correctAnswer,
      inputType: entry.inputType,
      deepExplanation: entry.deepExplanation,
      references: entry.references,
    })),
  }));
};

const Train = () => {
  const mappedData = mapTopicsAndEntries(db);

  return (
    <div>
      <h2>Training Topics</h2>
      {mappedData.map((topic) => (
        <div key={topic.topicName} className="topic">
          <h3>{topic.topicName}</h3>
          <ul>
            {topic.entries.map((entry) => (
              <li key={entry.id}>
                <strong>Question:</strong> {entry.question}
                <br />
                <strong>Options:</strong> {entry.options.join(", ")}
                <br />
                <strong>Correct Answer:</strong> {entry.correctAnswer.join(", ")}
                <br />
                <strong>Explanation:</strong> {entry.deepExplanation}
                <br />
                <strong>References:</strong>{" "}
                <a href={entry.references[0]} target="_blank" rel="noopener noreferrer">
                  {entry.references[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Settings = () =>
  <div>settings

  </div>;
const Guide = () =>
  <div className="guide">
    <h1>Guide</h1>
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwas...<br /><br />
    <h5>as?</h5>w<br />etwaasdfs...<br /><br />
  </div >

function App() {

  // directory
  const [selectedDirectory, setSelectedDirector] = useState("setting");
  const renderContent = () => {
    switch (selectedDirectory) {
      case "train":
        return <Train />;
      case "setting":
        return <Settings />;
      case "guide":
        return <Guide />;
      default:
        return <div>Select an option to see the content.</div>;
    }
  };

  return (
    <div className="App">
      <body className="body">
        {renderContent()}
      </body>
      <footer className="footer">
        <button className={selectedDirectory === "train" ? "directory-buttons-active" : "directory-buttons"}
          onClick={() => setSelectedDirector("train")}
        >train</button>
        <button className={selectedDirectory === "setting" ? "directory-buttons-active" : "directory-buttons"}
          onClick={() => setSelectedDirector("setting")}>setting</button>
        <button className={selectedDirectory === "guide" ? "directory-buttons-active" : "directory-buttons"}
          onClick={() => setSelectedDirector("guide")}>guide</button>
      </footer>
    </div>
  );
}

export default App;
