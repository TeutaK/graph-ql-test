import React from "react";
import PropTypes from "prop-types"

const SearchInput = (props) => {
  const { ref, value, placeholder, onChange, onkeydown } = props;

  return(
      <>
          <input
              type="text"
              className="input"
              ref={ref}
              value={value}
              placeholder= {placeholder}
              onChange={onChange} onKeyDown={onkeydown}
          />
      </>
  )
};

SearchInput.propTypes = {
    ref: PropTypes.object,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onkeydown: PropTypes.func
};

export default SearchInput;