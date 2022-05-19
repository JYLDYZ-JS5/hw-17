import { Fragment } from 'react'
import { createPortal } from 'react-dom'
import classes from './Modal.module.css'

function Backdrop(props) {
  return <div onClick={props.onCloseCart} className={classes.backdrop}></div>
}

function ModalOverLay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop onCloseCart={props.onCloseCart} />, portalElement)}
      {createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement,
      )}
    </Fragment>
  )
}
export default Modal
