import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

describe('Quote', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});