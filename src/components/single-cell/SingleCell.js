import './singleCell.css'

function SingleCell({ special, children, onClick}) {
    const className = special? 'display-special' : 'display-regular';

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default SingleCell
