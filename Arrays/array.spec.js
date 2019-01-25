const assert = require('chai').assert;
const expect = require('chai').expect;

const removeDuplicates = require('./remove-duplicates').removeDuplicates;
const removeDuplicatesWithSet = require('./remove-duplicates').removeDuplicatesWithSet;

const twoNumbersSum = require('./two-numbers-sum').twoNumbersSum;
const threeNumbersSum = require('./three-numbers-sum').threeNumbersSum

describe('Array: Remove duplicates', () => {
    it('Should return array', () => {
        const result = removeDuplicates([1, 2, 3, 4, 5, 4, 3]);
        assert.isArray(result, true)
    })
    it('should remove duplicate numbers', () => {
        const result = removeDuplicates([1, 2, 2, 2, 1]);
        expect([1, 2]).to.eql(result)
    })

    it('should remove duplicate numbers using Set', () => {
        const result = removeDuplicatesWithSet([1, 2, 2, 2, 1]);
        expect([1, 2]).to.eql(result)
    })
})


describe("Array: Two Numbers Sum", () => {
    it('should return array', () => {
        const result = twoNumbersSum([1, 2, 4, 7, 12, 17, 22], 18);
        assert.isArray(result)
    })
    it('should return two elements that upto given sum', () => {
        const result = twoNumbersSum([1, 2, 4, 7, 12, 17, 22], 18);
        expect([1, 17]).to.eql(result);
    })
    it('should return empty array', () => {
        const result = twoNumbersSum([1, 2, 4, 7, 12, 17, 22], 4);
        expect([]).to.eql(result);
    })
})


describe("Array: Three Numbers Sum", () => {
    it('should return array', () => {
        const result = threeNumbersSum([1, 2, 4, 7, 12, 17, 22], 7);
        assert.isArray(result)
    })
    it('should return two elements that upto given sum', () => {
        const result = threeNumbersSum([1, 2, 4, 7, 12, 17, 22], 7);
        expect([1, 2, 4]).to.eql(result);
    })
    it('should return empty array', () => {
        const result = threeNumbersSum([1, 2, 4, 7, 12, 17, 22], 8);
        expect([]).to.eql(result);
    })
})

