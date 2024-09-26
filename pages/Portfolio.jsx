import React from 'react';
import Project from '../components/Project';

const projects = [
    {
        title: 'Project 1',
        image: 'path/to/image1.jpg',
        deployedLink: 'https://deployedlink1.com',
        repoLink: 'https://github.com/yourusername/project1'
    },
    {
        title: 'Project 2',
        image: 'path/to/image2.jpg',
        deployedLink: 'https://deployedlink2.com',
        repoLink: 'https://github.com/yourusername/project2'
    },
    // Add more projects as needed...
];

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
