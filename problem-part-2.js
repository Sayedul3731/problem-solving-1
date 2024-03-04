// 1. reverse Integer 
// 2. convert "." to "[.]" (Defanging an IP Address)
// 3. নিচের paragraph এ "coding" শব্দটি কয়বার ব্যবহার করা হয়েছে? প্রথমবার "coding" কত নাম্বার পজিশনে পাওয়া গেছে?
// 4. jewels & stones


// 1. reverse Integer 
// var reverse = function(x) {
//     const reverseInteger = parseInt(x.toString().split('').reverse().join(''));
//     console.log(Math.pow(2,31) - 1);
//     if(reverseInteger > Math.pow(2,31) - 1){
//         return 0
//     }
//     console.log(Math.sign(x));
//     return reverseInteger * Math.sign(x);
// };
// const x = -123;
// console.log(reverse(x));


// // 2. convert "." to "[.]" (Defanging an IP Address)

// var defangIPaddr = function(address) {
//     const result = address.split(".").join("[.]");
//     return result;
// };
// const address = "1.1.1.1";
// console.log(defangIPaddr(address));


// 3. নিচের paragraph এ "coding" শব্দটি কয়বার ব্যবহার করা হয়েছে? প্রথমবার "coding" কত নাম্বার পজিশনে পাওয়া গেছে?
// const paragraph = "Coding, also known as programming, is the art and science of designing and building computer programs. It involves writing sets of instructions in a programming language that a computer can understand and execute. Coding is a fundamental skill in the world of technology and is used to create a wide range of applications, from simple scripts to complex software systems. Programmers use their creativity and problem-solving abilities to translate ideas into functional code, enabling computers to perform specific tasks or solve particular problems. The process of coding requires precision, attention to detail, and logical thinking, as even a small error can lead to unexpected results. Continuous learning and adaptability are crucial in this dynamic field, given the ever-evolving nature of programming languages and technologies. Overall, coding empowers individuals to turn concepts into reality, shaping the digital landscape we interact with daily.";

// const matches = paragraph.match(/coding/gi); /* i = flag for case insensitive and g for global */
// const occurrence = matches.length ? matches.length : 0;
// console.log(occurrence);
// let position = paragraph.search(/coding/i);
// position = position >= 0 ? position : "not found!";
// console.log(position);

// 4. jewels & stones
// var numJewelsInStones = function(jewels, stones) {
//     let total = 0;
//     for(let i = 0; i< stones.length; i++){
//        if(jewels.indexOf(stones[i]) != -1){
//         total++
//        }
//     }
//     return total;
// };

// const jewels = "aA";
// const stones = "aAAbbbb";
// console.log(numJewelsInStones(jewels, stones));