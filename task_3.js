// Задание #3

(function() {
  const container = document.createElement('ul')
  container.classList.add('data-container')
  const loadingSpan = document.createElement('span')
  loadingSpan.classList.add('data-loader')
  loadingSpan.textContent = 'Загрузка...'
  loadingSpan.setAttribute('hidden', '')
  container.append(loadingSpan)
  document.body.prepend(container)
})()

function createList(text) {
  const list = document.createElement('li')
  list.textContent = text
  return list
}

function loading() {
  const loadSpan = document.querySelector('.data-loader')
  if(loadSpan.hasAttribute('hidden')){
    loadSpan.removeAttribute('hidden')
  } else {
    loadSpan.setAttribute('hidden', '')
  }
}

function errorMessage(container) {
  const errorText = document.createElement('span')
  errorText.textContent = 'Произошла ошибка в получении данных об альбомах...'
  errorText.classList.add('red-text')
  container.append(errorText)
}

const albumUrl = 'https://jsonplaceholder.typicode.com/albums'
const container = document.querySelector('.data-container')

async function renderAlbums(url) {
  loading()
  try {
    const response = await fetch(url)
    if(!response.ok) throw new Error('Ошибка!!!')
    const albums = await response.json()
    albums.forEach(el => {
      container.append(createList(el.title))
    })
  }
}

renderAlbums(albumUrl)