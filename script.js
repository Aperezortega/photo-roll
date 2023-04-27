const photoRoll = document.getElementById('photo-roll')
const selectedImage = document.querySelector('.selected-image-container img');

photoRoll.addEventListener('mouseover', function(e) {
  console.log("Event listener triggered!");
  if (e.target.tagName === 'IMG') {
    const imageUrl = e.target.getAttribute('data-img');
    console.log("imageUrl set to:", imageUrl);
    selectedImage.setAttribute('src', imageUrl);
  }
});
