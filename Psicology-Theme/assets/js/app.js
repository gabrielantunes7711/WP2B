function mobileMenu(){
  const mobileMenu = document.querySelector('.menu-mobile')
    
  if(mobileMenu.style.left < '0rem'){
    mobileMenu.style.left = '0rem'
  }else if(mobileMenu.style.left == '0rem'){
    mobileMenu.style.left = '-80rem'
  }
}
