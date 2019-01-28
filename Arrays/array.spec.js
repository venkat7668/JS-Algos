const assert = require('chai').assert;
const expect = require('chai').expect;

const removeDuplicates = require('./remove-duplicates').removeDuplicates;
const removeDuplicatesWithSet = require('./remove-duplicates').removeDuplicatesWithSet;

const twoNumbersSum = require('./two-numbers-sum').twoNumbersSum;
const threeNumbersSum = require('./three-numbers-sum').threeNumbersSum

const findMinDiffTwoArraysElements = require('./find-min-diff-two-arrays').findMinDifTwoArraysElements
const reArrangeArrayItems = require('./rearange-array-items').rearrangeArrayItems

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

describe("Array: Find minium difference between two arrays", () => {
    it("should return number as a result", () => {
        const result = findMinDiffTwoArraysElements([12, 32, 41, 52, 75, 95], [9, 12, 45, 79, 99, 102]);
        assert.isNumber(result)
    })

    it("should return min [Zero] diffrence of the arrays elements", () => {
        const result = findMinDiffTwoArraysElements([1, 12, 23, 34, 45], [22]);
        assert.equal(1, result);
    })
});

describe("Array: Rearrange array items", () => {
    it('should return array', () => {
        const result = reArrangeArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        assert.isArray(result);
    })

    it('should return array in proper order', () => {
        const result = reArrangeArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect([1, 9, 2, 8, 3, 7, 4, 6, 5]).to.eql(result);
    })
})