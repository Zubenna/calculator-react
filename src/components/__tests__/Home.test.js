import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Header', () => {
  it('Tests the rendering of components', () => {
    const tree = renderer
      .create(
        <Router>
          <Home />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
