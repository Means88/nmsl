import { expect } from 'chai';
import { hello } from '../src';

describe('index test', () => {
  it('should pass', () => {
    expect(hello()).to.equal('Hello world');
  });
});
