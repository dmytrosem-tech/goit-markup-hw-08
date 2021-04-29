;(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]')
  const mobileMenuRef = document.querySelector('[data-menu]')

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false

    menuBtnRef.classList.toggle('is-open')
    menuBtnRef.setAttribute('aria-expanded', !expanded)

    mobileMenuRef.classList.toggle('is-open')
  })
})()

// ;(() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-menu-open]'),
//     closeModalBtn: document.querySelector('[data-menu-close]'),
//     itm: document.querySelector('[data-btn-close]'),
//     itm1: document.querySelector('[data-logo]'),
//     itm2: document.querySelector('[data-btn-menu]'),
//     itm3: document.querySelector('[data-nav]'),
//     itm4: document.querySelector('[data-address]'),
//     itm5: document.querySelector('[data-soc]'),
//     itm6: document.querySelector('[data-header]'),
//   }

//   refs.openModalBtn.addEventListener('click', toggleModal)
//   refs.closeModalBtn.addEventListener('click', toggleModal)

//   function toggleModal() {
//     refs.itm.classList.toggle('hidden-itm')
//     refs.itm1.classList.toggle('show-itm')
//     refs.itm2.classList.toggle('show-itm')
//     refs.itm3.classList.toggle('show-itm')
//     refs.itm4.classList.toggle('show-itm')
//     refs.itm5.classList.toggle('show-itm')
//     refs.itm6.classList.toggle('show-header')
//   }
// })()
