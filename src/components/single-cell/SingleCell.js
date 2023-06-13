import "./singleCell.css";

function SingleCell({ className, children, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export default SingleCell;
