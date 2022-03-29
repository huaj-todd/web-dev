import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }

    return (
        <>
<textarea value={whatsHappening} className="wd-search-area"
          onChange={(event) =>
              setWhatsHappening(event.target.value)}>
</textarea>
            <button onClick={tuitClickHandler} className="btn btn-primary wd-button-radius">
                Tuit
            </button>
        </>
    );
}
export default WhatsHappening;