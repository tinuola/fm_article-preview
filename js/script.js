
const shareIconElem = document.querySelector('.share-icon')

const iconDark = document.querySelector('.share-icon--dark')

const iconLight = document.querySelector('.share-icon--light')

const cardFooterElem = document.querySelector('.card-footer')

const cardBylineElem = document.querySelector('.card-byline-label')

const shareGroupElem = document.querySelector('.share-icons-group')


// check that it works!
shareIconElem.addEventListener('click', function(){
  this.classList.toggle('share-icon--lightbg')
  iconDark.classList.toggle('hide-icon')
  iconLight.classList.toggle('show-icon')
  cardFooterElem.classList.toggle('card-footer-dark')
  cardBylineElem.classList.toggle('hide-label')
  shareGroupElem.classList.toggle('show-label')
  console.log('clicked!')
})


