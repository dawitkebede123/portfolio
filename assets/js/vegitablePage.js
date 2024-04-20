(()=>{
    const button = document.getElementsByTagName('button')
    const product = document.getElementsByClassName('product')
    const clicked = false
    for(let i = 0;i<=button.length;i++){
        button[i].addEventListener('mouseover',()=>{
            button[i].style.backgroundColor = 'green'
            button[i].style.color = 'white'
           
        })
       
        button[i].addEventListener('click',()=>{
            clicked = true
            button[i].style.backgroundColor = 'green'
            button[i].style.color = 'white'
           
        })
        // if(clicked==true){
            button[i].addEventListener('mouseleave',()=>{
                // if(clicked ==true){
                    button[i].style.backgroundColor = 'white'
                    button[i].style.color = 'black'
                // }
               
               
            })
        // }
    }

    for(let i=0;i<=product.length;i++){
        product[i].addEventListener('click',()=>{
             product[i].style.border = '2px solid blue'
           
        })
    }
})()