import React, { useState } from "react";

const mapTopicsAndEntries = (db) => {
    return db.map((topic) => ({
        topicName: topic.topicName,
        entries: topic.entries.map((entry) => ({
            id: entry.id,
            term: entry.term,
            explanation: entry.explanation,
            question: entry.question,
            answerType: entry.answerType,
            options: entry.options,
        })),
    }));
};

const ToggleItem = ({ id, term, explanation, question, answerTyep, options, trainingMode }) => {
    const [Resolve, setResolve] = useState(false);

    return (
        <div onClick={() => setResolve(!Resolve)} className="item">

            {trainingMode === "explain term" ? (
                <div className="item-question">t: {term}</div>
            ) : (
                <div className="item-question">e: {explanation}</div>
            )}

            {Resolve && trainingMode === "explain term" ? (
                <div className="item-answer">e: {explanation}</div>
            ) : (
                ""
            )}

            {Resolve && trainingMode === "find term" ? (
                <div className="item-answer">t: {term}</div>
            ) : (
                ""
            )}

        </div>


    )

};

const Train = ({ selectedTopics, db, trainingMode }) => {
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
                            id={entry.id}
                            term={entry.term}
                            explanation={entry.explanation}
                            question={entry.question}
                            answerTypes={entry.answerTypes}
                            options={entry.options}
                            trainingMode={trainingMode}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Train;