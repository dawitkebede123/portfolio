const mediaQuery = window.matchMedia("(max-width: 500px)");

function handleMediaChange(event) {
  const isSmallScreen = event.matches; 
  const right_header = document.getElementById("right_header")
  const left_bar = document.getElementById('left_bar')
  const logo = document.getElementById("logo")
  if (isSmallScreen) { 
    right_header.innerHTML = '<button id="btn_right_header" onclick=handleHeaderBtn()> = </button>'
  } 
  else{
    right_header.innerHTML = "<div id='right_header'> <div><Button>A</Button></div><div><button>B</button></div><div><button>C</button></div><div><button>D</button></div></div>"
    left_bar.style.visibility = "hidden"
    logo.style.visibility = 'visible'
}
}
function handleHeaderBtn(){
    const btn = document.getElementById('btn_right_header')
    const logo = document.getElementById("logo")
    const left_bar = document.getElementById('left_bar')
    if(btn.innerHTML == '='){

        left_bar.style.length = '0px'
        left_bar.style.visibility = "visible"
        logo.style.visibility = 'hidden'
        btn.innerHTML = 'X'
        
    }
    else{
        left_bar.style.length = '0px'
        left_bar.style.visibility = "hidden"
        logo.style.visibility = 'visible'
        btn.innerHTML = '=' 
    }
}
// Add event listener to the media query object
mediaQuery.addEventListener("change", handleMediaChange);
