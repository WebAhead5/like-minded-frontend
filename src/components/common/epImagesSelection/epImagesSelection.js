import React, {useEffect} from "react";
import "./epImagesSelection.css";
import CircularImageUpload from "../circularImage/circularImageUpload";

const {useState} = React;


const defaultImage = "/images/defaultImageProfile.png";

function EpImagesSelection({onChange, initialImagesArr = []}) {

    const [imagesArrState, setImagesArrState] = useState(initialImagesArr)
    const [pageLoaded, setPageLoaded] = useState(false)

    function updateImage(index, imgString) {
        let newState = imagesArrState.map((img, i) => index === i ? imgString : img)
        setImagesArrState(newState)
    }
    useEffect(() => {
        if (imagesArrState.length < 4) {
            let tempArr = [...imagesArrState]
            for (let i = tempArr.length; i < 4; i++)
                tempArr.push(defaultImage)
            setImagesArrState(tempArr)
        } else if (imagesArrState.length > 4) {
            setImagesArrState(imagesArrState.slice(0, 4))
        }

    }, [])
    useEffect(() =>
    {
        if(!pageLoaded)
            setPageLoaded(true);
        else
            onChange && onChange(imagesArrState)

    }, [imagesArrState]);





    return (<div className={"ep_imagesSelection"}>


            <CircularImageUpload src={imagesArrState[0]} className={"ep_imagesSelection_primaryImg"}
                                 onUpload={(imgString) => updateImage(0, imgString)}/>

            <div className={"ep_imagesSelection_subImagesContainer"}>
                <CircularImageUpload src={imagesArrState[1]} className={"ep_imagesSelection_subImg"}
                                     onUpload={(imgString) => updateImage(1, imgString)}/>
                <CircularImageUpload src={imagesArrState[2]} className={"ep_imagesSelection_subImg"}
                                     onUpload={(imgString) => updateImage(2, imgString)}/>
                <CircularImageUpload src={imagesArrState[3]} className={"ep_imagesSelection_subImg"}
                                     onUpload={(imgString) => updateImage(3, imgString)}/>
            </div>
        </div>

    );
}

export default EpImagesSelection;
