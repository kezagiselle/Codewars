// 17.	Create a function that determines the age classification of people:
// Bellow are classifications according to specific conditions:
 
//     MIMICRY: 			0 - 12
//     SELF-DISCOVERY: 	13 - 19
//     COMMITMENT: 		20 - 45
//     LEGACY:			46 - Above

function ageClassif(age){
    if(age >0 && age <= 12){
        console.log("MINICRY");
    } else if(age >= 13 && age <= 19){
        console.log("SELF-DISCOVERY");
    } else if(age >=20 && age <= 45){
        console.log("COMMITMENT");
    } else if(age >= 46){
        console.log("LEGACY");
    } else {
        console.log("Invalid age");
    }
    return age;
};
console.log(ageClassif(23));