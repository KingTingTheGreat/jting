import { Experience } from '@/types';
import SectionWrapper from './sectionWrapper';
import ElementWrapper from './elementWrapper';
import BulletPoint from './bulletPoint';
import experience from '@/data/experience';

const ExperienceElement = ({ experience }: { experience: Experience }) => {
  return (
    <ElementWrapper title={experience.title} subtitle={experience.company}>
      <p>{experience.location}</p>
      <p>
        {experience.startDate}-{experience.endDate}
      </p>
      <ul>
        {experience.description.map((description) => (
          <BulletPoint key={description} content={description} />
        ))}
      </ul>
    </ElementWrapper>
  );
};

const ExperienceWrapper = () => {
  return (
    <SectionWrapper
      title={experience.title}
      description={experience.description}
    >
      {experience.children.map((experience) => (
        <ExperienceElement key={experience.title} experience={experience} />
      ))}
    </SectionWrapper>
  );
};

export default ExperienceWrapper;
