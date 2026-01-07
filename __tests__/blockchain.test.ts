import { describe, test, expect} from '@jest/globals';
import Block from './../src/lib/block';
import Blockchain from '../src/lib/blockchain';

describe("Blockchain tests", () => { 

    test('Should has genesis blocks', () => {
     const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
})


    test('Should be valid', () => {
     const blockchain = new Blockchain();
    expect(blockchain.isValid().success).toEqual(true);
})

    test('Should add block', () => {
     const blockchain = new Blockchain();
     blockchain.addBlock(new Block(1, blockchain.blocks[0].hash, "Block 2"))
    expect(blockchain.isValid().success).toEqual(true);
})
   
})