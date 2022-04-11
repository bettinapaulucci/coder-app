import { Typography } from '@mui/material';
import React from 'react'
import s from '../Footer/Footer.module.css'

function Footer() {
  return (
    <footer className={s.footer} >
            <Typography textAlign="center" color='white'>
                ENVIOS A TODO EL PAÍS
            </Typography>
        </footer>
  )
}

export default Footer;