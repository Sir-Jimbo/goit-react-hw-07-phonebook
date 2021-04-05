import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Layout from 'components/Layout/Layout';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import operations from './redux/phonebook/phonebook-operations';
import Spinner from './components/Spinner/Spinner';
import Notification from './components/Notification/Notification';
import selectors from './redux/phonebook/phonebook-selectors';
import s from './components/PhoneBook/PhoneBook.module.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Layout>
        <Section>
          {this.props.error &&
            <Notification
              message={`ERROR: ${this.props.error.message}.`} />}
          <ContactForm />
          <Filter />
          {this.props.isLoadingContacts && <Spinner />}
          <CSSTransition
            in={this.props.contacts.length > 0}
            timeout={250}
            classNames={s}
            unmountOnExit
          >
            <ContactList />
          </CSSTransition>
        </Section>
      </Layout >
    );
  };
}


const mapStateToProps = (state) => ({
  contacts: selectors.getAllContacts(state),
  isLoadingContacts: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);