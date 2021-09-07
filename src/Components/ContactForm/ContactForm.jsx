import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { Form, Input, Label, ButtonAdd } from "./ContactForm.styled";

export default class ContactForm extends Component {
  state = { name: "", number: "" };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    let id = uuidv4();
    const contactData = {
      name,
      id,
      number,
    };
    this.props.submit(contactData);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.addContact}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            onChange={this.inputChange}
            value={name}
            placeholder="New contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </Label>
        <Label>
          Tel:
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="New contact number"
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </Label>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  Submit: PropTypes.func,
};
