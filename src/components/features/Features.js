import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/*<Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        />*/}
        <Card
  title="UX Design"
  des="Create user-friendly interfaces that enhance the overall experience."
  icon={<SiAntdesign />}
/>

       <Card
  title="SEO Optimisation"
  des="Enhance your website's visibility and performance in search engines."
  icon={<SiProgress />}
/>

<Card
  title="Web Development"
  des="Build responsive and dynamic websites tailored to your needs."
  icon={<FaMobile />}
/>

        <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        />
        {/*<Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaGlobe />}
        />*/}
      </div>
    </section>
  );
}

export default Features