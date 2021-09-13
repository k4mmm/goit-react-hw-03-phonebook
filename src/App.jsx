import { Component } from "react";
import { Filter } from "./Components/Filter/Filter";
import ContactForm from "./Components/ContactForm/ContactForm";
import { ContactList } from "./Components/ContactList/ContactList";
import { MainTitle, Title, PhonebookSection } from "./App.styled";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidUpdate(prevState) {
    const prevContacts = prevState.contacts;
    const newContacts = this.state.contacts;

    if (prevContacts !== newContacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem("contacts"));
    localContacts
      ? this.setState({ contacts: localContacts })
      : this.setState({ contacts: [] });
  }

  deleteContact = (data) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== data.id),
    }));
  };

  addContact = (data) => {
    const { contacts } = this.state;
    const findContact = contacts.find((contact) => {
      return contact.name === data.name;
    });

    !findContact
      ? this.setState((prevState) => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contact`);
  };

  inputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <PhonebookSection>
        <MainTitle>Phonebook</MainTitle>

        <ContactForm submit={this.addContact} />
        <Title>Contacts</Title>
        <Filter filter={this.state.filter} change={this.inputChange} />
        <ContactList
          deleteContact={this.deleteContact}
          visibleContacts={this.visibleContacts()}
        />
      </PhonebookSection>
    );
  }
}

export default Phonebook;
