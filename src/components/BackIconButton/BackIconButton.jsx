import PropTypes from 'prop-types';
import { StyledButton } from './BackIconButton.styled';

const BackIconButton = ({ children, onClick, ...allyProps }) => (
  <StyledButton type="button" onClick={onClick} {...allyProps}>
    {children}
  </StyledButton>
);

BackIconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
export default BackIconButton;

BackIconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
};
