import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAttr } from '../Utils'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component;
}

//below we see if there is a classname of header component
describe('Header Component', () => {

  let component
  beforeEach(()=>{
    component = setUp()
  })

  it('Should render without errors', () => {
    // const component = setUp()
    // console.log(component.debug())
    // const wrapper = component.find(`[data-test='headerComponent']`)
    const wrapper = findByTestAttr(component, 'headerComponent')
    expect(wrapper.length).toBe(1)
  })

//below we see if the logo gets rendered
  it('Should render a logo', () => {
    // const component = setUp()
    // console.log(component.debug())
    // const logo = component.find(`[data-test='logoIMG']`)
    const logo = findByTestAttr(component, 'logoIMG')
    expect(logo.length).toBe(1)
  })
})
