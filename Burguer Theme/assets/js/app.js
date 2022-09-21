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


//-------------------------Comentary
const textarea = document.querySelector("#observation");
const characters = document.querySelector("#current-characters");
const maxLength = textarea.maxLength;

textarea.addEventListener('input', () =>{
  characters.textContent = textarea.value.length + " / " + maxLength;
  if (textarea.value.length >= maxLength ){
    characters.style.color = 'var(--secondary-color)';
  } else{
    characters.style.color = null;
  }
})

//-------------------------Seção de adicionais
let totalOrder = document.querySelector(".total-order")
let initialPrice = document.querySelector(".initial-price")
let quantityTotal = document.querySelector(".quantity-total")
const btnSubmit = document.querySelector('.modal-submit').lastElementChild

initialPrice.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(initialPrice.dataset.initialPrice)
totalOrder.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(initialPrice.dataset.initialPrice)
totalOrder.dataset.totalOrder = initialPrice.dataset.initialPrice


document.querySelectorAll('.order-options').forEach((el, i) => {
    const orderElement = el
    const maxValue = el.querySelector(".max-value")

  orderElement.querySelectorAll(".option").forEach((el, i) =>{
    const btnLess = el.querySelector(".less-adiconal")
    const btnMore = el.querySelector(".more-adicional")
    let input = el.querySelector("input")
    const adicionalPrice = el.querySelector(".adicional")
    const currentValue = orderElement.querySelector(".current-value")

    btnMore.addEventListener('click', () =>{
      if (currentValue.dataset.currentValue < maxValue.dataset.maxValue){
      currentValue.dataset.currentValue = parseInt(currentValue.dataset.currentValue) + 1
      currentValue.innerHTML = currentValue.dataset.currentValue
      input.value = parseInt(input.value) + 1
      totalOrder.dataset.totalOrder = (parseFloat(totalOrder.dataset.totalOrder) + (parseFloat(adicionalPrice.dataset.adicionalPrice)) * parseInt(quantityTotal.value))
      totalOrder.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalOrder.dataset.totalOrder)
    }
  })

    btnLess.addEventListener('click', () =>{
      if (currentValue.dataset.currentValue > 0 && input.value > 0){
      currentValue.dataset.currentValue = parseInt(currentValue.dataset.currentValue) - 1
      currentValue.innerHTML = currentValue.dataset.currentValue
      input.value = parseInt(input.value) - 1
      totalOrder.dataset.totalOrder = (parseFloat(totalOrder.dataset.totalOrder) - (parseFloat(adicionalPrice.dataset.adicionalPrice)) * parseInt(quantityTotal.value))
      totalOrder.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalOrder.dataset.totalOrder)
      }
    })
  })
})
 

//---------------------------


function more(el){
  let inputNumber = el.previousSibling.previousSibling
  totalOrder.dataset.totalOrder = (parseFloat(totalOrder.dataset.totalOrder) + (parseFloat(totalOrder.dataset.totalOrder) / inputNumber.value))
  totalOrder.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalOrder.dataset.totalOrder)
    inputNumber.value = parseInt(inputNumber.value) + 1
}

function less(el){
  let inputNumber = el.nextSibling.nextSibling
    if(inputNumber.value > 1){
      totalOrder.dataset.totalOrder = (parseFloat(totalOrder.dataset.totalOrder) - (parseFloat(totalOrder.dataset.totalOrder) / inputNumber.value))
      totalOrder.innerHTML = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalOrder.dataset.totalOrder)
      inputNumber.value = parseInt(inputNumber.value) - 1
    }
}

