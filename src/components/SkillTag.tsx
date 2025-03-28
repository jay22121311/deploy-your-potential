
interface SkillTagProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillTag = ({ name, icon }: SkillTagProps) => {
  return (
    <div className="flex items-center bg-portfolio-100 text-portfolio-800 px-3 py-1.5 rounded-full">
      {icon && <span className="mr-2">{icon}</span>}
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default SkillTag;
