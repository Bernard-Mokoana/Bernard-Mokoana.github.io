const TitleHeader = ( {title, sub}) => {
  return (
    <div>
      <p>{sub}</p>
      <h2 className="text-center">{title}</h2>
    </div>
  )
}

export default TitleHeader