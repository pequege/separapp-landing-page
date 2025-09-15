import React from 'react';

const AutoplayCarousel = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./src/assets/como-funciona/image01.png" className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/como-funciona/image02.png" className="d-block" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./src/assets/como-funciona/image03.png" className="d-block" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyU0dX27ttfeOL8z0ipr+V64s7rL7Tz8a8a4p5Z"
        crossorigin="anonymous"></script>
    </>
  )
}

export default AutoplayCarousel;