import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        />
        <ProjectsCard
          title=" News Article Writing"
          des=" As a skilled news writer, I create timely and well-researched articles covering current events, industry trends, and human interest stories!"
          src={projectThree}
        />
        <ProjectsCard
          title="Freelance Content Editor"
          des=" freelance content editing services, ensuring articles are polished, engaging, and free of errors!"
          src={projectThree}
        />
        <ProjectsCard
          title="Business Website"
          des=" Develop a professional website for a fictional or local business!"
          src={projectOne}
        />
        <ProjectsCard
          title="Personal Blog"
          des=" Create a personal blog where you share your thoughts, experiences, and expertise on a particular topic, such as technology, travel, or food. Implement categories, tags, and an easy-to-navigate layout!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects