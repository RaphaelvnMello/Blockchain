import { describe, test, expect, beforeAll} from '@jest/globals';
import Block from '../src/lib/block';

describe("Block tests", () => {

let genesis: Block;

beforeAll(() => {
    genesis = new Block(0, "", "Genesis Block");
})

    test('Should be valid', () => {
        const block = new Block(1, genesis.hash, "abc");
        const valid =block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeTruthy();
    })
    
 test('Should NOT be valid (previus hash)', () => {
        const block = new Block(1, "", "abc");
        const valid = block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

     test('Should NOT be valid (index)', () => {
        const block = new Block(-1, "abc", "abc");
        const valid =block.isValid(genesis.hash, genesis.index);
        expect(valid.success).toBeFalsy();
    })

})

