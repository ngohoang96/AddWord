export class Word{
    _id : string;
    constructor(
        public en : string,
        public vn : string,
        public isMemorized = false) {
  
            this._id = Math.round(Math.random() * 10000) + '';
        }
  }
  export const WORDS : Word[] = [
    new Word('One','Mot', true),
    new Word('Two','Hai', false),
    new Word('Three','Ba', false),
    new Word('Four','Bon',true),
    
]
  