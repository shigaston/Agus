document.getElementById("send").onclick = function(e){
    e.preventByDefault();
    var date= new(Date);
    var stars= document.getElementById("").nodeValue;
    var name= document.getElementById("commentBox").nodeValue;
    const newcomment = {
     "score": 6,
     "description": "Excelente relación calidad-precio, muy recomendado.",
    "user": "agustina_zabaleta",
    "dateTime": "2020-09-12 16:29:18",
      }

    PRODUCT_INFO_COMMENTS_URL.push(newcomment);
    showComments(PRODUCT_INFO_COMMENTS_URL);
};
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/prod2.jpg" class="d-block w-100" alt="FiatWay">
        </div>
        <div class="carousel-item">
          <img src="img/prod3.jpg" class="d-block w-100" alt="Peugeot 208">
        </div>
        <div class="carousel-item">
          <img src="img/prod4.jpg" class="d-block w-100" alt="Suzuki Celerio">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>