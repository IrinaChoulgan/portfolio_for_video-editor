import React from 'react'
import s from './Languages.module.css'

import { images } from '../../constants'

const LanguagesBtn = () => {
  return (
    <div className={s.btn_container}>
      <button className={s.btn}>
        <img className={s.btn_img} src={images.usa} alt='usa'/> US
      </button>
      <button className={s.btn}>
      <img className={s.btn_img} src={images.germany} alt='germany'/> DE
      </button>
    </div>
  )
}

export default LanguagesBtn
