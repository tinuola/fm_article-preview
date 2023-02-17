
const shareIcon = document.querySelector('.share-icon')

const iconDark = document.querySelector('.share-icon--dark')

const iconLight = document.querySelector('.share-icon--light')

const cardFooter = document.querySelector('.card-footer')

const cardByline = document.querySelector('.card-byline-label')

const shareIconGroup = document.querySelector('.share-icon-group')

  shareIcon.addEventListener('click', function(){
    // Change share icon background
    this.classList.toggle('share-icon--bground')

    // Swap icons
    iconDark.classList.toggle('hide-icon')
    iconLight.classList.toggle('show-icon')

    // Change footer background (mobile)
    cardFooter.classList.toggle('card-footer-dark')

    // Hide/Show author label (mobile)
    cardByline.classList.toggle('hide-byline-label')
    
    // Hide/Show icon group
    shareIconGroup.classList.toggle('show-icon-group')
  })
