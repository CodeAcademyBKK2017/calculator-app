import 'react-native';
import BaseView from '../BaseView.component';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<BaseView/>);
    instance = wrapper.instance();
    instance._setFirstnum(2);
    instance._setSecondnum(2);
  });

  it('renders Defination', () => {
    const tree = renderer.create(<BaseView />);
    expect(tree).toBeDefined();
  });

  it('BaseView: renders correctly', () => {
    const tree = renderer.create(<BaseView />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('BaseView: setFirstnum must set in state', () => {
    instance._setFirstnum(1);
    expect(instance.state.Firstnum).toEqual(1);
  });

  it('BaseView: setSecondnum must set in state', () => {
    instance._setSecondnum(1);
    expect(instance.state.Secondnum).toEqual(1);
  });

  it('BaseView: clearResultFunc must clear result state', () => {
    instance._clearResultFunc();
    expect(instance.state.result).toEqual(0);
  });

  it('BaseView: plusOparateFunc must summation correct', () => {
    expect(instance.state.result).toEqual(0);
    instance._plusOparateFunc();
    expect(instance.state.result).toEqual(4);
  });

  it('BaseView: minusOparateFunc must subtraction correct', () => {
    expect(instance.state.result).toEqual(0);
    instance._minusOparateFunc();
    expect(instance.state.result).toEqual(0);
  });

  it('BaseView: multiplyOparateFunc must multiplying correct', () => {
    expect(instance.state.result).toEqual(0);
    instance._multiplyOparateFunc();
    expect(instance.state.result).toEqual(4);
  });
  it('BaseView: divideOparateFunc must dividing correct', () => {
    expect(instance.state.result).toEqual(0);
    instance._divideOparateFunc();
    expect(instance.state.result).toEqual(1);
  });

});
