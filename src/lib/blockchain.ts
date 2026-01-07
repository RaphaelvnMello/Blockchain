import Block from './block';
import Validation from './validation';

export default class Blockchain{
    blocks: Block[];
    nextIndex : number = 0;

    constructor(){
        this.blocks = [new Block(0, "", "Genesis Block")]
        this.nextIndex++;
    }

    getLastBlock() : Block {
        return this.blocks[this.blocks.length - 1]!;
    }

    addBlock(block: Block) : boolean {
        const getLastBlock = this.getLastBlock();
        if(!block.isValid(getLastBlock.hash, getLastBlock.index)) return false;
        this.blocks.push(block);
        this.nextIndex++
        return true;
    }

    isValid() : Validation {

        for(let i=this.blocks.length - 1; i>0; i--){
            const currentBlock = this.blocks[i];
            const previusBlock = this.blocks[i-1];
            if(currentBlock != null && previusBlock != null)
           { 
            const isValid = currentBlock.isValid(previusBlock.hash, previusBlock.index);
            if(!isValid) return new Validation(false, "Current Block is Not Valid");
        }
        }
        return new Validation(true, "Current Block is was create with success");
    }
}