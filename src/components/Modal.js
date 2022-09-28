import React from 'react';
import "./modal.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

function Modal({ imageList, selectedImg, setSelectedImg, folder }) {

  const exitPic = (e) => {
    if (e.target.classList.contains('backdrop' ) || e.target.classList.contains('imageWrap')) {
      setSelectedImg(() => {
        return {
          url: "",
          i: ""
        }
      })
    }
  }

  console.log(selectedImg);

  const length = imageList.length

  const nextSlide = () => {
    setSelectedImg((currentstate) => {
      let nextNum = (currentstate.i === length - 1 ? 0 : currentstate.i + 1)
      return {
        url: `../assets/imgs/${folder}/${imageList[nextNum]}.jpg`,
        i: nextNum
      }
    })
  }

  const prevSlide = () => {
    setSelectedImg((currentstate) => {
      let prevNum = (currentstate.i === 0 ? length - 1 : currentstate.i - 1)
      return {
        url: `../assets/imgs/${folder}/${imageList[prevNum]}.jpg`,
        i: prevNum
      }
    })
  }

  return (
    <>
     {selectedImg &&
      <section className='backdrop' onClick={exitPic}>
      <div className='imageWrap'>
        <img className='image' src={selectedImg.url} alt="large pic" />
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
    }
    </>
  );
}

export default Modal;