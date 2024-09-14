export interface testInterface{
name : string;
value : number;
print : (value1 :number ) => void;
}

const test : testInterface = {
name: "test",
value : 5,
print : (value1 : number)=>console.log("dd " + value1)
};


export const tests =[test]