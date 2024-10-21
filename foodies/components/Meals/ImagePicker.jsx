'use client'
import React, { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'

export default function ImagePicker({label,name}) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()

  const handlePickClick = () => {
    imageInputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()
    
    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
    
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && <Image src={pickedImage} alt="picked" fill/>}
        </div>
        <input type="file" id={name} 
        required accept="image/png, image/jpeg" name={name} 
        ref={imageInputRef}
        className={classes.input}
        onChange={handleImageChange}
        />
        <button type="button" className={classes.button}
        onClick={handlePickClick}
        >사진을 골라주세요</button>
      </div>
    </div>
  )
}
