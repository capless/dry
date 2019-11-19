/* eslint-disable react/forbid-foreign-prop-types */
function setPropTypes(name, Sources, Destination) {
  const Source = Array.isArray(Sources) ? Sources[0] : Sources;
  const sourcePropTypes = Array.isArray(Sources)
    ? getComponentsPropTypes(Sources)
    : getMuiPropTypes(Sources);

  Object.assign(
    Destination, {
      displayName: name,
      propTypes: { ...sourcePropTypes, ...Destination.propTypes },
      defaultProps: { ...Source.defaultProps, ...Destination.defaultProps },
    },
  );
}

function getComponentsPropTypes(Components) {
  return Components.reduce((accPropTypes, currComponent) => ({
    ...accPropTypes,
    ...currComponent.propTypes,
    ...getMuiPropTypes(currComponent),
  }), {});
}

function getMuiPropTypes(Component) {
  const { Naked, propTypes } = Component;
  if (Naked) {
    return { ...Naked.propTypes, ...propTypes };
  }
  return propTypes;
}

export default setPropTypes;
