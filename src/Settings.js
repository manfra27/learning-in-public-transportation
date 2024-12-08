import React from "react";

const Settings = ({
  topics,
  selectedTopics,
  toggleTopicSelection,
  modes,
  handleModeSelection,
  trainingMode,
}) => {
  return (
    <div className="settings">
      <h3>select mode HORSZ DA GANSTA</h3>
      <ul>
        {modes.map((mode) => (
          <li
            key={mode}
            onClick={() => handleModeSelection(mode)}
            style={{
              cursor: "pointer",
              color: trainingMode.includes(mode) ? "green" : "grey",
            }}
          >
            {mode}
          </li>
        ))}
      </ul>

      <h3>select topics</h3>
      <ul className="topics-list">
        {topics.map((topicName) => (
          <li
            key={topicName}
            className={`topic-item ${
              selectedTopics.includes(topicName)
                ? "item-answer"
                : "item-question"
            }`}
            onClick={() => toggleTopicSelection(topicName)}
          >
            {topicName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;
