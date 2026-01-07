import * as CryptoJS from 'crypto-js'

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

    isValid() : boolean {
        if(this.index < 0) return false;
        if(!this.previusHash) return false;
        return true;

    }
}