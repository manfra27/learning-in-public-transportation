import React, { useState } from "react";
import { db } from './db.js';
import './App.css';
import Train from './Train';
import Settings from './Settings';
import Guide from './Guide';




function App() {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const toggleTopicSelection = (topicName) => {
    setSelectedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((topic) => topic !== topicName)
        : [...prev, topicName]
    );
  };

  const [selectedDirectory, setSelectedDirector] = useState("train");
  const renderContent = () => {
    switch (selectedDirectory) {
      case "train":
        return <Train selectedTopics={selectedTopics} db={db} />;
      case "setting":
        return <Settings
          topics={db.map((topic) => topic.topicName)}
          selectedTopics={selectedTopics}
          toggleTopicSelection={toggleTopicSelection}
        />;
      case "guide":
        return <Guide />;
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
