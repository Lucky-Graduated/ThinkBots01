const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    // desktop device
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)

// faq
const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

// pricing
const billingSwitch = document.getElementById("billingSwitch");
  const prices = document.querySelectorAll(".price");

  billingSwitch.addEventListener("change", () => {
    prices.forEach(price => {
      if (price.textContent.includes("$49")) {
        price.innerHTML = billingSwitch.checked ? "$499<span>/year</span>" : "$49<span>/month</span>";
      } else if (price.textContent.includes("$99")) {
        price.innerHTML = billingSwitch.checked ? "$999<span>/year</span>" : "$99<span>/month</span>";
      }
    });
  });