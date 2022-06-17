import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = ({ onHideModal }) => {
  return <div className={classes.backdrop} onClick={onHideModal} />;
};

const ModalOverlay = ({ title, message, onHideModal }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onHideModal}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onHideModal }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideModal={onHideModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onHideModal={onHideModal}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
