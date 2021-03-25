import React from 'react';
import renderer from 'react-test-renderer';
import Routes from '../Routes';

describe('Routes', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<Routes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
