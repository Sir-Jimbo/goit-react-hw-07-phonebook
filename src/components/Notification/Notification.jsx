import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
import { connect } from 'react-redux';
import s from './Notification.module.css';

class Notification extends Component {
   componentDidMount() {
      if (this.props.error) {
         setTimeout(() => {
            this.props.clearError();
         }, 2500);
      }
   }

   render() {
      return (
         <CSSTransition
            in={this.props.message}
            timeout={250}
            classNames={s}
            unmountOnExit
         >
            <div className={s.overlay} >
               <p className={s.message}>
                  {this.props.message}
               </p>
            </div>
         </CSSTransition>
      );
   };
}
const mapStateToProps = (state) => ({
   error: selectors.getError(state),
})

const mapDispatchToProps = dispatch => ({
   clearError: () => dispatch(phonebookActions.clearError())
});



export default connect(mapStateToProps, mapDispatchToProps)(Notification);