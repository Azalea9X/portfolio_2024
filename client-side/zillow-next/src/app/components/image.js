const ImageCard = (url, filename, width, height) => {
    return (
        <>
        <img 
        className="
            max-w-[100vw]
            max-h-[100px !important]
            xl:h-[300px]"

        src={url.url} 
        alt={filename}
        style={{ width: `${width}px`, height: `${height}px` }} />
        </>
    )
};

export default ImageCard;