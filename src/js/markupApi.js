export default function makeMarkup(array) {
  const markupStrings = array.map(el => {
    return `<a href=${el.largeImageURL}>
    <div class="photo-card">
  <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" 
Width="640"
Height="360"/>
  <div class="info">
    <p class="info-item">
      <b>Likes: </b>${el.likes}
    </p>
    <p class="info-item">
      <b>Views: </b>${el.views}
    </p>
    <p class="info-item">
      <b>Comments: </b>${el.comments}
    </p>
    <p class="info-item">
      <b>Downloads: </b>${el.downloads}
    </p>
  </div>
</div></a>`;
  });

  return markupStrings.join('');
}
