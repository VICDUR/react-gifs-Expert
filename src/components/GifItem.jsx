

export const GifItem = ({url, title, id}) => {
  
  const titleModified = title.slice(0, 10).trim();

  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p> { titleModified } </p>
    </div>
  )
}
