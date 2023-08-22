import React from 'react'
import s from './Languages.module.css'

import { images } from '../../constants'
import { useTranslation } from 'react-i18next'


const LanguagesBtn = () => {
  const {i18n} = useTranslation()
 
  const changeLanguage = (languag)=> {
    i18n.changeLanguage(languag)
  }
  return (
    <div className={s.btn_container}>
      <button className={s.btn} onClick={()=>changeLanguage("en")}>
        <img className={s.btn_img} src={images.usa} alt='usa'/> EN
      </button>
      <button className={s.btn} onClick={()=>changeLanguage("de")}>
      <img className={s.btn_img} src={images.germany} alt='germany'/> DE
      </button>
    </div>
  )
}

export default LanguagesBtn
