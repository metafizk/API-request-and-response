function ImageItem({image}) {
    console.log(image);
    return ( <div className="imageItem">
        <img src={image.urls.small} alt={image.alt_description}/>
    </div> );
}

export default ImageItem;