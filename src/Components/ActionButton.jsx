import PropTypes from "prop-types"

function ActionButton({ children }) {
	return (
		<button className="ActionButton">{children}</button>
    )	
}
ActionButton.propTypes = {
    children: PropTypes.node.isRequired
}
export default ActionButton

