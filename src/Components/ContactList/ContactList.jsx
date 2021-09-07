import PropTypes from "prop-types";
import { ButtonDelete, ContactItem, List } from "./ContactList.styled";

export const ContactList = ({ deleteContact, visibleContacts }) => {
  return (
    <List>
      {visibleContacts.map((contact) => {
        return (
          <ContactItem key={contact.id}>
            {contact.name} : {contact.number}
            <ButtonDelete
              type="submit"
              onClick={() => {
                deleteContact(contact);
              }}
            >
              Delete
            </ButtonDelete>
          </ContactItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
