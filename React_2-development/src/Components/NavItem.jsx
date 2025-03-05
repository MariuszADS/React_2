import PropTypes from 'prop-types';

export function NavItem({ children }) {
	return <button>{children}</button>;
}
NavItem.propTypes = {
	children: PropTypes.node.isRequired,
};
