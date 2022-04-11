import * as React from 'react'
import s from './CartWidget.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function CartWidget() {
  return (
    <>

    <div>
          <ShoppingCartIcon className={s.colorIcon} />
    </div>
    </>
  );
}
