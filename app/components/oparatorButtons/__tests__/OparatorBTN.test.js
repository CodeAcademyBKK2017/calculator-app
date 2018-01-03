import 'react-native';
import OPBTN from '../OparatorBTN.component';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <OPBTN />
  );
  expect(tree).toBeDefined();
});

it('BaseView: renders correctly', () => {
  const tree = renderer.create(<OPBTN />).toJSON();
  expect(tree).toMatchSnapshot();
});