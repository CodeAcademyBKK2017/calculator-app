import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Note: test renderer must be required after react-native.
import RESULT from '../Result.component';

it('renders correctly', () => {
  const tree = renderer.create(
    <RESULT />
  );
  expect(tree).toBeDefined();
});

it('BaseView: renders correctly', () => {
  const tree = renderer.create(<RESULT />).toJSON();
  expect(tree).toMatchSnapshot();
});