import "./gallery.css"
import React, { useState } from 'react';
import Modal from "./Modal";


function Gallery(props) {

  let imageList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]

  const [selectedImg, setSelectedImg] = useState({
    url: "",
    i: "",
  })

  function eventHandler(src, index ) {
    setSelectedImg(() => {
      return {
        url: src,
        i: index
      }
    })
  }
  
  return (
    <section>
      {imageList.map((item, index) => {
        return (
          <div className="imageContainer" key={item}>
            <img alt=''src={`../assets/imgs/${props.folder}/${item}.jpg`} onClick={(e) => eventHandler(e.target.src, index)}></img>
          </div>)
      })}
      { selectedImg.url && <Modal folder={props.folder} imageList={imageList} selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </section>
  );
}

export default Gallery;