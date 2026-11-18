
interface TitleHeaderProps {
  title: string;
  sub?: string;
}

const TitleHeader = ({ title, sub }: TitleHeaderProps) => {
  return (
    <div>
      {sub && <p>{sub}</p>}
      <h2 className="text-center">{title}</h2>
    </div>
  );
};

export default TitleHeader;
