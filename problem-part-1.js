// 1. Leap Year 
// 2. twoSum 
// 3. find vowels
// 4. Duplicate Numbers 
// 5. pairs test 
// 6. Build Array from permutation
// 7.Final Value of Variable After Performing Operations
// 8. Shuffle the array 
// 9. Convert Array to numbers and also sumNumber convert to an array
// 10. Shuffle String 


// 1. Leap Year test 
function isLeapYear(year){
    if((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is a Leap Year`);
    }else{
        console.log(`${year} is not a Leap Year`);
    }
}

isLeapYear(2024)



// 2. twoSum problem solve here 
var twoSum = function(nums, target) {
    var map = {};
    console.log(map);
    for(var i=0; i<nums.length; i++){
        var value = nums[i];
        console.log(value);
        var complementPair = target - value;
        console.log(complementPair);
        if(map[complementPair] !== undefined){
            console.log(map[complementPair], i);
            return [map[complementPair], i];
        }else{
            map[value] = i;
            console.log(map[value]);
        }
    }
};
const nums = [2,7,11,15];
const target = 9;
twoSum(nums, target)

// 3. find vowels 
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

const findVowels = (sentence) => {
    let count = 0;

    const sentenceArr = Array.from(sentence);
    sentenceArr.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
}

const sentence = "I Love Bangladesh";
console.log(findVowels(sentence));


// 4. duplicates checking 
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index; 
});
console.log(duplicates);


// 5. pairs test 
var numIdenticalPairs = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let c = 1
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j && nums[j] != -1) {
                nums[j] = -1
                c++
            }
        }
        if (c > 1) {
            arr.push(c)
        }
    }
    let pairs = 0
    for (let i = 0; i < arr.length; i++) {
        pairs += (arr[i] * (arr[i] - 1)) / 2
    }
    return pairs
};

const numbersAll = [1,2,3,1,1,3];
console.log(numIdenticalPairs(numbersAll));

// 6. Build Array from permutation 
var buildArray = function(nums) {
    let arr =[];
    for(let i = 0; i< nums.length; i++){
        const ans = nums[nums[i]];
        arr.push(ans)
    }
    return arr;
};

const Numbers = [5,0,1,2,3,4];
console.log(buildArray(Numbers));

// 7.Final Value of Variable After Performing Operations
var finalValueAfterOperations = function(operations) {
    let X = 0 ;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] == "--X" || operations[i] == "X--"){
            X = X - 1
        }else if(operations[i] == "++X" || operations[i] == "X++"){
            X = X + 1
        }
    }
    return X ;
 };
 finalValueAfterOperations(["--X","X++","X++"])


// 8. Shuffle Array 
var shuffle = function(nums, n) {
    let i = n - 1
    for (let j = nums.length - 1; j >= n; j--) {
        nums[j] <<= 10
        nums[j] |= nums[i]
        i--
    }
    
    i = 0
    for (let j = n; j < nums.length; j++) {
        const num1 = nums[j] & 1023
        const num2 = nums[j] >> 10
        nums[i] = num1
        nums[i + 1] = num2
        i += 2    
    }
    
    return nums
};
const Nums = [1,2,3,4,4,3,2,1];
const n = 4;
console.log(shuffle(Nums, n));


// 9. Convert Array to numbers and also sumNumber convert to an array
var convertArrToNum = function(l1, l2) {
    let num1 = 0;
    for(let i = 0; i < l1.length; i++){
        num1 += l1[i] * Math.pow(10, l1.length - 1 - i)
    }
    let num2 = 0;
    for(let i = 0; i< l2.length; i++){
        num2 += l2[i] * Math.pow(10, l2.length - 1 - i)
    }
    const reverseNum1 = parseInt(num1.toString().split('').reverse().join(''));
    const reverseNum2 = parseInt(num2.toString().split('').reverse().join(''));
    const sumNums = reverseNum1 + reverseNum2;
    const reverseSumNums = parseInt(sumNums.toString().split('').reverse().join(''));
    const finalArr = reverseSumNums.toString().split('').map(Number);
    return finalArr;
};
const arr1 = [2, 4, 3, 4];
const arr2 = [1, 3, 4, 2];
console.log(convertArrToNum(arr1, arr2));

// with ListNode Solution;
var addTwoNumbers = function(l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if(!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10 , nextNode)
    }
    return iter(l1, l2)
};

// 10. Shuffle String 
var restoreString = function(s, indices) {
    let arr = [];
    let result = "";
    for(let i = 0; i < indices.length; i++){
        arr[indices[i]] = s.charAt(i);
    }
    for(let i = 0; i < arr.length ; i++){
        result = result + arr[i];
    }
    return result;
};
const s = "codeleet";
const indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices));