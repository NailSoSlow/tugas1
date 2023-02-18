let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("headline_placeholder");
  let dots = document.getElementsByClassName("headline_dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}
/* <div class="headline_wrapper">
        <span id="headline-1"></span>
        <span id="headline-2"></span>
        <span id="headline-3"></span>
        <span id="headline-4"></span>
        <div class="headline">
          <div class="headline_content">
            <a href="ngaku-haus-kasih-sayang-gisella-anastasia-aku-kering.html">
              <div class="headline_placeholder">
                <img src="https://via.placeholder.com/640x384" alt="Ngaku Haus Kasih Sayang, Gisella Anastasia: Aku Kering" />
                <div class="headline_title_box">
                  <div class="headline_title">
                    <div class="headline_subtitle"><h4>Entertainment</h4></div>
                    <h1>Ngaku Haus Kasih Sayang, Gisella Anastasia: Aku Kering</h1>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="headline_content">
            <a href="">
              <div class="headline_placeholder">
                <img src="https://via.placeholder.com/640x384" alt="" />
                <div class="headline_title_box">
                  <div class="headline_title">
                    <div class="headline_subtitle"><h4>Kategori</h4></div>
                    <h1>Headline 2</h1>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="headline_content">
            <a href="">
              <div class="headline_placeholder">
                <img src="https://via.placeholder.com/640x384" alt="" />
                <div class="headline_title_box">
                  <div class="headline_title">
                    <div class="headline_subtitle"><h4>Kategori</h4></div>
                    <h1>Headline 3</h1>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="headline_content">
            <a href="">
              <div class="headline_placeholder">
                <img src="https://via.placeholder.com/640x384" alt="" />
                <div class="headline_title_box">
                  <div class="headline_title">
                    <div class="headline_subtitle"><h4>Kategori</h4></div>
                    <h1>Headline 4</h1>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="headline_navigation">
          <a href="#headline-1">1</a>
          <a href="#headline-2">2</a>
          <a href="#headline-3">3</a>
          <a href="#headline-4">4</a>
        </div>
      </div> */
