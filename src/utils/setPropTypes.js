/* eslint-disable react/forbid-foreign-prop-types */
function setPropTypes(name, Source, Destination) {
  Object.assign(
    Destination, {
      displayName: name,
      propTypes: { ...Source.propTypes, ...Destination.propTypes },
      defaultProps: { ...Source.defaultProps, ...Destination.defaultProps },
    },
  );
}

export default setPropTypes;
