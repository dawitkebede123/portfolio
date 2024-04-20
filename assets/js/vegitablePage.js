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

      
})()