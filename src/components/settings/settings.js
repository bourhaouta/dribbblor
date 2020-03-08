import React, { useContext } from 'react'
import { SettingsContext } from '../../store'
import Slider from '../slider/slider'
import Swatcher from '../swatcher/swatcher'
import Uploader from '../uploader/uploader'
import * as S from './settings.styled'

const Settings = ({ onImageChange, onVibrantChange, vibrant }) => {
  const { spacing, setSpacing, radius, setRadius } = useContext(SettingsContext)

  return (
    <S.Settings>
      <S.Controller>
        <S.Label htmlFor='uploader'>Upload your image</S.Label>
        <Uploader id='uploader' onImageChange={onImageChange} />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Background</S.Label>
        <Swatcher onVibrantChange={onVibrantChange} vibrant={vibrant} />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Spacing</S.Label>
        <Slider
          type='range'
          min='0'
          max='25'
          step='.5'
          onChange={({ target }) => setSpacing(target.value)}
          value={spacing}
        />
      </S.Controller>

      <S.Controller inline>
        <S.Label>Radius</S.Label>
        <Slider
          type='range'
          min='0'
          max='300'
          step='.5'
          onChange={({ target }) => setRadius(target.value)}
          value={radius}
        />
      </S.Controller>
    </S.Settings>
  )
}

export default Settings
