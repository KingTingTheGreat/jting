import { Education } from '@/types';
import SectionWrapper from './sectionWrapper';
import ElementWrapper from './elementWrapper';
import BulletPoint from './bulletPoint';

const EducationElement = ({ education }: { education: Education }) => {
  return (
    <ElementWrapper title={education.title} subtitle={education.school}>
      <p>{education.gpa}</p>
      <p>
        {education.startDate}-{education.endDate}
      </p>
      <h5 className="text-xl">Relevant Coursework</h5>
      <ul>
        {education.relevantCoursework.map((course) => (
          <BulletPoint key={course} content={course} />
        ))}
      </ul>
    </ElementWrapper>
  );
};

const EducationWrapper = ({
  title,
  educationList,
}: {
  title: string;
  educationList: Education[];
}) => {
  return (
    <SectionWrapper title={title}>
      {educationList.map((education) => (
        <EducationElement key={education.title} education={education} />
      ))}
    </SectionWrapper>
  );
};

export default EducationWrapper;
