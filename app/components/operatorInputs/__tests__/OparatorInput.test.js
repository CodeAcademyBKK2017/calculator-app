import 'react-native';
import OPINPUT from '../OperatorInputs.component';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <OPINPUT />
  );
  expect(tree).toBeDefined();
});

it('BaseView: renders correctly', () => {
  const tree = renderer.create(<OPINPUT />).toJSON();
  expect(tree).toMatchSnapshot();
});