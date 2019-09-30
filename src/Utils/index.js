export const findByTestAttr=(component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}
// here it is finding the classname of data test and what the attribute is
