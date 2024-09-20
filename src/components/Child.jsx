import PropTypes from "prop-types";

export const Child = (props) => {
  return (
    <div>
      <h1>Child</h1>
      <p> {props.name} </p>
    </div>
  )
}

Child.propTypes = {
  name: PropTypes.string
}