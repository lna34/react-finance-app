import "./Tile.css";

interface Props {
  title: string;
  subtitle: string;
}

const Tile = ({ title, subtitle }: Props) => {
  return (
    <div className="tile">
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};
export default Tile;
