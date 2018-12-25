import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const CubeWrapper = styled.div`
  --blue: #1a6cb6;
  --cyan: #00a4a3;
  --green: #6dbf43;
  --maroon: #c91e84;
  --orange: #ee6234;
  --purple: #6b2d8e;
  --red: #ea2457;
  --yellow: #f7c12d;
  display: inline-block;
  margin-left: 72px;
  position: relative;
`;

const movingBackground = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -70px 0;
  }
`;

const background = css`
  animation: ${movingBackground} 3s linear infinite;
  background: linear-gradient(
    to right,
    var(--maroon),
    var(--maroon) 10px,
    var(--purple) 10px,
    var(--purple) 20px,
    var(--blue) 20px,
    var(--blue) 30px,
    var(--cyan) 30px,
    var(--cyan) 40px,
    var(--green) 40px,
    var(--green) 50px,
    var(--yellow) 50px,
    var(--yellow) 60px,
    var(--orange) 60px,
    var(--orange) 70px,
    var(--red) 70px
  );
  background-size: 70px;
`;

const CubeFace = styled.div`
  ${background}

  animation-delay: ${p => p.delay}s;
  height: 40px;
  position: absolute;
  transform: rotate(${p => p.rot}deg) skewX(-30deg) scaleY(0.864);
  transform-origin: 0 0;
  width: 40px;
`;

const Cube = ({ column }) => (
  <CubeWrapper>
    <CubeFace rot={210} delay={-0.7 * column} />
    <CubeFace rot={90} delay={-0.7 * column} />
    <CubeFace rot={-30} delay={-0.7 * column} />
  </CubeWrapper>
);

Cube.propTypes = {
  column: PropTypes.number.isRequired,
};

export default Cube;
