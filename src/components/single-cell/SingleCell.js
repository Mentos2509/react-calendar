import "./singleCell.css";

function SingleCell({ className, children, onClick, hasEvents }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
      {/* {hasEvents && <div className="dot" />} */}
    </div>
  );
}

export default SingleCell;
