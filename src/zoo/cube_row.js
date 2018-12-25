import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cube from './cube';

const RowWrapper = styled.div`
  margin-top: 44px;
  ${p => p.even && 'margin-left: 36px;'}
`;

const CubeRow = ({ length, rowNumber }) => (
  <RowWrapper even={rowNumber % 2}>
    {[...Array(length)].map((_, i) => (
      <Cube key={`cube-${Math.random()}`} column={i + rowNumber} />
    ))}
  </RowWrapper>
);

CubeRow.propTypes = {
  length: PropTypes.number.isRequired,
  rowNumber: PropTypes.number.isRequired,
};

export default CubeRow;
