// const arr=[2,3,4,5]
// /* for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// } 

// arr.forEach(item=>console.log(item))

// function add(num1,num2){
//     return num1+num2
// }

// console.log(add(2,3))
// */

function init(){
    const name=prompt("Please enter your name:")
    const imageURL=prompt("Please enter your profile picture url:")
    
    const p=document.createElement("p")
    p.textContent=`Welcome ${name}`
    document.body.append(p)

    const image=document.createElement("img")
    image.src=imageURL
    image.width=100
    image.height=100
    document.body.appendChild(image)

    document.body.removeChild(document.getElementById("main-heading"))
}

function demo(){
    /*const pTags=document.querySelectorAll("p.text")
    console.log(pTags)
    pTags[0].textContent="hello world again!!"*/
    const pTags=document.getElementsByClassName("text")
    console.log(pTags[0].textContent)
}

demo()

//init()

