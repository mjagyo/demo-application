const { expect } = require('chai');
const sinon = require('sinon');
const pool = require('../db');
const { transformString } = require('../helper');

describe('Checking available functionalities', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('Should expect the right transformed response', async () => {
    const result = transformString('fOoBar25');

    expect(result).to.equal("52RAbOoF");
  });
});
