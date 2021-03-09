// 1. How many searches?
/* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, identify 
the sequence of numbers that each recursive call will search 
to try and find 8.*/

//First pass: start=0, end=10, index=5, item=12
//Second pass: start=0, end=4, index=2, item=6
//Third pass: start=3, end=4, index=3, item=8
//Item found at index 3

/*Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
and using the recursive binary search algorithm, identify 
the sequence of numbers that each recursive call will search 
to try and find 16.*/

//First pass: start=0, end=10, index=5, item=12
//Second pass: start=6, end=10, index=8, item=17
//Third pass: start=6, end=7, index=6, item=14
//Fourth pass: start=7, end=7, index=7, item=15
//Fifth pass: start=8, end=7
//Item not found (start > end)

//2. Adding a React UI
// See search-algorithm-react program

//3. Find a book
/*Imagine you are looking for a book in a library with a Dewey 
Decimal index. How would you go about it? Can you express this 
process as a search algorithm? Implement your algorithm to find 
a book whose Dewey and book title is provided.*/

/* I would use a binary search approach. Since the dewey decimal 
system is already a type of sorted list, it would make sense to use 
a binary search algorithm by starting at the middle value of the 
decimal system and comparing the index of the book you are searching
for to see if it's larger or smaller than the middle index. Then
you can narrow down your search by only focusing on the larger half 
or small half, and repeat until the correct index/book is found 
*/

//4. Searching in a BST
/*1) Given a binary search tree whose in-order and pre-order traversals 
are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
What would be its postorder traversal?*/
//Answer: [14, 19, 15, 27, 25, 79, 90, 91, 89, 35]

/*2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
What is its pre-order traversal?*/
//Answer: [8, 6, 5, 7, 10, 9, 11]

//5. Implement different tree traversals
const BinarySearchTree = require('./BST')

function main() {
    const newTree = new BinarySearchTree();
    newTree.insert(25,25)
    newTree.insert(15,15)
    newTree.insert(50,50)
    newTree.insert(10,10)
    newTree.insert(24,24)
    newTree.insert(35,35)
    newTree.insert(70,70)
    newTree.insert(4,4)
    newTree.insert(12,12)
    newTree.insert(18,18)
    newTree.insert(31,31)
    newTree.insert(44,44)
    newTree.insert(66,66)
    newTree.insert(90,90)
    newTree.insert(22,22)
    console.log(newTree.inOrder())
    console.log(newTree.preOrder())
    console.log(newTree.postOrder())
}

//main()

//6. Find the next commanding officer
function nextInCommand() {
    //create a new binary tree
    const ranking = new BinarySearchTree();
    ranking.insert(5, 'Captain Picard')
    ranking.insert(3, 'Commander Riker')
    ranking.insert(2, 'Lt. Cmdr. Worf')
    ranking.insert(4, 'Lt. Cmdr. LaForge')
    ranking.insert(1, 'Lieutenant security-officer')
    ranking.insert(6, 'Commander Data')
    ranking.insert(8, 'Lt. Cmdr. Crusher')
    ranking.insert(7, 'Lieutenant Selar')
    //Complete a breadth-first search to determine rank
    console.log(ranking.breadthSort())
}

//nextInCommand();

//7. Max Profit
function maxProfit(prices){
    //create a new binary tree for the stock prices
    const priceTree = new BinarySearchTree;
    for (let i = 0; i < prices.length; i++) {
        priceTree.insert(prices[i], prices[i])
    }
    //find the left most value in tree (min price)
    var min = findMin(priceTree)
    //find the right most value in tree (max price)
    let max = findMax(priceTree)

    //Return max profit by subtracting max price by min price
    return `The max profit is ${max - min} dollars per share`
}

function findMin(tree) {
    if(tree.left === null) {
        return tree.value
    }
    else{
        return findMin(tree.left)
    }
}

function findMax(tree) {
    if(tree.right === null) {
        return tree.value
    }
    else{
         return findMax(tree.right)
    }
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]))