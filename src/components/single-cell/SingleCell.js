import './singleCell.css'

function SingleCell({ special, children}) {
    const className = special? 'display-special' : 'display-regular';

  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default SingleCell
