import PropTypes from "prop-types";

import { FilterInput, Label } from "./Filter.styled";

export const Filter = ({ filter, change }) => {
  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        onChange={change}
        name="filter"
        placeholder="Enter contact name"
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
