import './singleCell.css'

function SingleCell({ className, special, style, children, onClick}) {

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

export default SingleCell
