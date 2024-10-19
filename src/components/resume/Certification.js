import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certification = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Udemy Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-b51a6095-b6a5-4cb1-8c05-70ea25604832.jpg?v=1728121887000" target="_blank" rel="noopener noreferrer">
            <ResumeCard
              title="Professional Diploma in Agile and Project Management"
              subTitle="Udemy - Issued: Oct 2024"
              result="Certificate of Completion"
              des="This course covered Agile principles and practices, equipping me with skills in project management and teamwork."
            />
            <p className="text-sm text-gray-500 italic">Click to view certificate</p>
          </a>

          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-70d1f2a0-a018-4972-92b1-186e6c5931f6.jpg?v=1728045624000" target="_blank" rel="noopener noreferrer">
            <ResumeCard
              title="Python and Django Framework and HTML5 Full Stack Complete Course"
              subTitle="Udemy - Issued: Oct 2024"
              result="Certificate of Completion"
              des="This course taught me how to build full-stack applications using Python and Django, including web development fundamentals."
            />
            <p className="text-sm text-gray-500 italic">Click to view certificate</p>
          </a>

          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-bfc9232f-50f0-4637-99cd-992fa1e29723.jpg?v=1729087063000" target="_blank" rel="noopener noreferrer">
            <ResumeCard
              title="Build a Backend Rest API with Node Js From Scratch"
              subTitle="Udemy - Issued: Oct 2024"
              result="Certificate of Completion"
              des="This course taught me how to build a backend REST API using Node.js, covering key concepts like routing, middleware, authentication, and database integration."
            />
            <p className="text-sm text-gray-500 italic">Click to view certificate</p>
          </a>

          <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-db657d9d-192e-4e50-92d8-adcde7a7a5ca.jpg?v=1728034137000" target="_blank" rel="noopener noreferrer">
            <ResumeCard
              title="PHP with MySQL"
              subTitle="Udemy - Issued: Oct 2024"
              result="Certificate of Completion"
              des="I gained a comprehensive understanding of PHP programming and MySQL database management to develop dynamic web applications."
            />
            <p className="text-sm text-gray-500 italic">Click to view certificate</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Certification;
