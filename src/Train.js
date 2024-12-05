import React, { useState } from "react";

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

const ToggleItem = ({ label, value }) => {
    const [showValue, setShowValue] = useState(false);

    return (
        <div onClick={() => setShowValue(!showValue)} className="item">
            <div className="item-question">PS C:\{">"} {label}</div>
            <div className="item-answer">{showValue ? value : ""}</div>
        </div>
    )
};

const Train = ({ selectedTopics, db }) => {
    const mappedData = mapTopicsAndEntries(db).filter((topic) =>
        selectedTopics.includes(topic.topicName)
    );

    const allEntries = mappedData.flatMap((topic) => topic.entries);
    const shuffledEntries = allEntries.sort(() => Math.random() - 0.5);


    return (
        <div className="train">
            {mappedData.length === 0 ? (
                <p>PS /Users/jesus{">"}  select topics in ./setting</p>
            ) : (
                <ul>
                    {shuffledEntries.map((entry) => (
                        <ToggleItem
                            key={entry.id}
                            label={entry.question}
                            value={entry.correctAnswer}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Train;