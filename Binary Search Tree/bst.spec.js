const assert = require('chai').assert;
const expect = require('chai').expect;

const util = require('util')

const BST = require('./binary-search-tree');

describe("BST: Binary Search Tree", () => {
    it('should return typeof object', () => {
        const bst = new BST();
        bst.insert(30);
        bst.insert(25);
        bst.insert(23);

        // console.log(util.inspect(bst, false, null, true /* enable colors */))
        assert.isObject(bst);
    })

    it('should return given object', () => {
        const obj = {
            root: {
                data: 30,
                left: {
                    data: 25,
                    left: {
                        data: 23,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            }
        }

        const bst = new BST();
        bst.insert(30);
        bst.insert(25);
        bst.insert(23);

        expect(obj).to.eql(bst)
    })

    it('should remove given node and return object', () => {
        const obj = {
            root: {
                data: 66,
                left: {
                    data: 25,
                    left: {
                        data: 23,
                        left: { data: 16, left: null, right: null },
                        right: null
                    },
                    right: null
                },
                right: null
            }
        }

        let bst = new BST();
        bst.insert(30);
        bst.insert(25);
        bst.insert(23);
        bst.insert(16);
        bst.insert(66)
        bst.remove(30);

        //console.log(util.inspect(bst, false, null, true /* enable colors */))
        expect(obj).to.eql(bst)
    })
})