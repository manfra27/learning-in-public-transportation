import React from "react";

const Settings = ({ topics, selectedTopics, toggleTopicSelection }) => {
    return (
        <div className="settings">
            <h3>select topics</h3>
            <ul className="topics-list">
                {topics.map((topicName) => (
                    <li
                        key={topicName}
                        className={`topic-item ${selectedTopics.includes(topicName) ? "item-answer" : "item-question"
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