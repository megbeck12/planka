import PropTypes from 'prop-types';
import React from 'react';

const VoteStep = React.memo(({ title }) => {});

VoteStep.propTypes = {
  title: PropTypes.string.isRequired,
};

export default VoteStep;
