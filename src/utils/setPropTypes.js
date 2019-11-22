/* eslint-disable react/forbid-foreign-prop-types */
function setPropTypes(name, Sources, Destination) {
  const sourcePropTypes = Array.isArray(Sources)
    ? getComponentsPropTypes(Sources)
    : getMuiPropTypes(Sources);
  const sourceDefaultProps = Array.isArray(Sources)
    ? getComponentsDefaultProps(Sources)
    : getMuiDefaultProps(Sources);

  Object.assign(
    Destination, {
      displayName: name,
      propTypes: { ...sourcePropTypes, ...Destination.propTypes },
      defaultProps: { ...sourceDefaultProps, ...Destination.defaultProps },
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

function getComponentsDefaultProps(Components) {
  return Components.reduce((accPropTypes, currComponent) => ({
    ...accPropTypes,
    ...currComponent.defaultProps,
    ...getMuiDefaultProps(currComponent),
  }), {});
}

function getMuiDefaultProps(Component) {
  const { Naked, defaultProps } = Component;
  if (Naked) {
    return { ...Naked.defaultProps, ...defaultProps };
  }
  return defaultProps;
}

export default setPropTypes;
