import * as CryptoJS from 'crypto-js';
import Validation from './validation';

export default class Block{
    index: number;
    timestamp: number;
    hash: string;
    previusHash: string;
    data: string;

    constructor(index: number, previusHash: string, data: string){
       this.index = index;
       this.timestamp = Date.now();
       this.previusHash = previusHash;
       this.data = data;
       this.hash = this.getHash();
    }

    getHash() : string{
        return CryptoJS.SHA256(this.index + this.data + this.timestamp + this.previusHash).toString();
    }

    isValid(previusHash: string, previousIndex : number) : Validation {
        if(previousIndex !== this.index - 1) return new Validation(false, "Invalid Index");
        if(this.index < 0) return new Validation(false, "Invalid Index");;
        if(!this.previusHash) return new Validation(false, "Invalid Previous Hash");;
        if(previusHash !== previusHash) return new Validation(false, "Invalid Previous Hash");;
       return new Validation(true, "Success");

    }
}