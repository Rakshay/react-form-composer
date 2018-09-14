import React from 'react';
import PropTypes from 'proptypes';

class Form extends React.Component {
  componentDidMount() {
    
  }
  render () {
    return (
      <div>Testing</div>
    );
  }
}

Form.propTypes = {
  config: PropTypes.arrayOf(PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    order: PropTypes.number,
    props: PropTypes.object,
    attrs: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string.isRequired
  })),
  onSubmit: PropTypes.func,
  onChange: PropTypes.func
};

export default Form;