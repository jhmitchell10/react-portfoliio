import React from 'react';

const Resume = () => {
    return (
        <section className="resume">
            <h2>Resume</h2>
            <a href="path/to/your/resume.pdf" download>Download Resume</a>
            <ul>
                <li>Proficiency 1</li>
                <li>Proficiency 2</li>
                {/* Add more proficiencies here */}
            </ul>
        </section>
    );
};

export default Resume;
