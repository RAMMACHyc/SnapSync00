import React, { useState, useEffect, useRef } from 'react';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';


const ButtonPopup = ({ selectedPostHandler }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {

      setPopupPosition({
        top: 40,
        left: 259,
      });
    }
  }, [isPopupOpen]);

  return (
    <div className="container">
     
        <MoreHorizOutlinedIcon ref={buttonRef}   onClick={() => setPopupOpen(!isPopupOpen)}/>
    

      {isPopupOpen && (
        <button
          className="popup"
          onClick={selectedPostHandler} 
          style={{ top: popupPosition.top, left: popupPosition.left ,display:"flex",color:"white",border:"none"}}
        ><EditNoteIcon  />
          <p>edit</p>
        </button>
      )}
    </div>
  );
};

export default ButtonPopup;
