import React, { useState } from "react";
import { db } from './db.js';
import './App.css';
import Train from './Train';
import Settings from './Settings';
import Guide from './Guide';




function App() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const modes = ["explain term", "find term"];
  const [trainingMode, setTrainingMode] = useState("explain key");

  const handleModeSelection = (mode) => {
    setTrainingMode(mode);
  };

  const toggleTopicSelection = (topicName) => {
    setSelectedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((topic) => topic !== topicName)
        : [...prev, topicName]
    );
  };

  const [selectedDirectory, setSelectedDirector] = useState("setting");
  const renderContent = () => {
    switch (selectedDirectory) {
      case "train":
        return <Train
          selectedTopics={selectedTopics}
          db={db}
          trainingMode={trainingMode}
        />
      case "setting":
        return <Settings
          topics={db.map((topic) => topic.topicName)}
          selectedTopics={selectedTopics}
          toggleTopicSelection={toggleTopicSelection}
          modes={modes}
          handleModeSelection={handleModeSelection}
          trainingMode={trainingMode}
        />
      case "guide":
        return <Guide />
      default:
        return <div>Select an option to see the content.</div>;
    }
  };

  return (
    <div className="App">
      <div className="body" >
        {renderContent()}
      </div>
      <footer className="footer">
        <div className="button">
          <button className={selectedDirectory === "train" ? "directory-buttons-active" : "directory-buttons"}
            onClick={() => setSelectedDirector("train")}
          >train</button>
          <button className={selectedDirectory === "setting" ? "directory-buttons-active" : "directory-buttons"}
            onClick={() => setSelectedDirector("setting")}>setting</button>
          <button className={selectedDirectory === "guide" ? "directory-buttons-active" : "directory-buttons"}
            onClick={() => setSelectedDirector("guide")}>guide</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
