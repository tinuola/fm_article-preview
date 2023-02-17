
const shareIcon = document.querySelector('.share-icon')

const iconDark = document.querySelector('.share-icon--dark')

const iconLight = document.querySelector('.share-icon--light')

const cardFooter = document.querySelector('.card-footer')

const cardByline = document.querySelector('.card-byline-label')

const shareIconGroup = document.querySelector('.share-icon-group')

  shareIcon.addEventListener('click', function(){
    this.classList.toggle('share-icon--lightbg')
    iconDark.classList.toggle('hide-icon')
    iconLight.classList.toggle('show-icon')
    cardFooter.classList.toggle('card-footer-dark')
    cardByline.classList.toggle('hide-byline-label')
    shareIconGroup.classList.toggle('show-icon-group')
  })
