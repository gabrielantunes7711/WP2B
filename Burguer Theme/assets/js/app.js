const nextIcon = '<i class="fa-solid fa-chevron-right"></i>';
const prevIcon = '<i class="fa-solid fa-chevron-left"></i>';

$(document).ready(() => {
  $(".owl-slide").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navText: [prevIcon, nextIcon],
    autoplay: true,
    autoplayTimeout: 8000,
  });
});

const modal = document.querySelector(".modal");
const body = document.querySelector("body");

function openModal(event) {
  event.preventDefault();
  modal.classList.add("show");
  disableBodyScroll();
}

function closeModal(event) {
  event.preventDefault();
  modal.classList.remove("show");
  anableBodyScroll();
}

function disableBodyScroll() {
  body.classList.add("disable-body-scroll");
}

function anableBodyScroll() {
  body.classList.remove("disable-body-scroll");
}

function increment(el) {
  const input = el.previousElementSibling;
  const maxValue = parseInt(
    el
      .closest(".quantity")
      .closest(".option")
      .previousElementSibling.querySelector(".max-value").innerHTML
  );
  const currentValue = el
    .closest(".quantity")
    .closest(".option")
    .previousElementSibling.querySelector(".current-value");
  let calc = parseInt(input.value);
  calc += 1;

  if (calc <= maxValue) {
    input.value = calc;
    currentValue.innerHTML = calc;
  }
}

function decrement(el) {
  const maxValue = 
    el
      
  ;
  const currentValue = el
    .closest(".quantity")
    .closest(".option")
    .previousElementSibling.querySelector(".current-value");
  const input = el.nextElementSibling;
  let calc = parseInt(input.value);
  calc -= 1;

  if (calc >= 0) {
    input.value = calc;
    currentValue.innerHTML = calc;
  }
}

//-------------------------Comentary
const textarea = document.querySelector("#observation");
const characters = document.querySelector("#current-characters");
const maxLength = textarea.maxLength;

textarea.addEventListener('input', () =>{
  characters.textContent = textarea.value.length + " / " + maxLength;
  if (textarea.value.length >= maxLength ){
    characters.style.color = 'red';
  } else{
    characters.style.color = null;
  }
})

//-------------------------Seção de adicionais
let totalOrder = document.querySelector(".total-order")
let initialPrice = document.querySelector(".initial-price")
let quantityTotal = document.querySelector(".quantity-total")

totalOrder.innerHTML = initialPrice.innerHTML

document.querySelectorAll('.order-options').forEach((el, i) => {
    const orderElement = el
    const maxValue = el.querySelector(".max-value").innerHTML

  orderElement.querySelectorAll(".option").forEach((el, i) =>{
    const btnLess = el.querySelector(".less-adiconal")
    const btnMore = el.querySelector(".more-adicional")
    let input = el.querySelector("input")
    const adicionalValue = el.querySelector(".adicional")

    btnMore.addEventListener('click', () =>{
      const currentValue = orderElement.querySelector(".current-value")
      if (parseInt(currentValue.innerHTML) < maxValue){
      currentValue.innerHTML = parseInt(currentValue.innerHTML) + 1
      input.value = parseInt(input.value) + 1
      totalOrder.innerHTML = (parseFloat(totalOrder.innerHTML) + (parseFloat(adicionalValue.innerHTML)) * parseInt(quantityTotal.value)).toFixed(2)   
      }   
    })

    btnLess.addEventListener('click', () =>{
      const currentValue = orderElement.querySelector(".current-value")
      if (parseInt(currentValue.innerHTML) > 0 && input.value > 0){
      currentValue.innerHTML = parseInt(currentValue.innerHTML) - 1
      input.value = parseInt(input.value) - 1
      totalOrder.innerHTML = (parseFloat(totalOrder.innerHTML) - (parseFloat(adicionalValue.innerHTML)) * parseInt(quantityTotal.value)).toFixed(2) 
      }   
    })
  })
})
 

//---------------------------


function more(el){
  let inputNumber = el.previousSibling.previousSibling
    totalOrder.innerHTML = (parseFloat(totalOrder.innerHTML) + (parseFloat(totalOrder.innerHTML) / inputNumber.value)).toFixed(2)
    inputNumber.value = parseInt(inputNumber.value) + 1
}

function less(el){
  let inputNumber = el.nextSibling.nextSibling
    if(inputNumber.value > 1){
      totalOrder.innerHTML = (parseFloat(totalOrder.innerHTML) - (parseFloat(totalOrder.innerHTML) / inputNumber.value)).toFixed(2)
      inputNumber.value = parseInt(inputNumber.value) - 1
    }
}
