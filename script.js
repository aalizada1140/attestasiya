class Message{
    constructor(name,message){
        this.name=name;
        this.message=message; 
        this.time=new Date();
    }    
    toString(){
        return `${this.name}, ${this.message}, ${this.time.getHours()} : ${this.time.getMinutes()}`;
    }
    }
class Messenger extends Message{
    constructor(name,message){
        super(name,message);
        this.arr=[];
    }
    send(author, text) {
        this.name=author;
        this.message=text;
        this.arr.push(`${this.name}, ${this.message}, ${this.time.getHours()} : ${this.time.getMinutes()}`);
    } 
    show_history(){
        this.arr.forEach(element=>{
            console.log(element)
        })
    }
}
let messenger=new Messenger('Fidan','Ilk mesaj');
messenger.send();
messenger.show_history();
console.log(messenger);
