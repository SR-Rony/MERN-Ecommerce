const cloudinaryHelper = async(imageUrl)=>{
    const imagePathSegment = imageUrl.split('/')
    const imageLastPath = imagePathSegment[imagePathSegment.length -1]
    const imagePathValue = imageLastPath.replace(".jpg","")
    return imagePathValue
}

module.exports = {cloudinaryHelper}