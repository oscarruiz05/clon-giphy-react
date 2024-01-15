
function GifItem({title, url}) {
  return (
    <>
        <div className="border rounded-md p-2">
            <img src={url} alt="" />
            <span>{title}</span>
        </div>
    </>
  )
}

export default GifItem