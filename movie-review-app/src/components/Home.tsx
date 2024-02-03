import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://image.tmdb.org/t/p/original/kSEIAfZGJSouRIIOxqRJq29CXE2.jpg"
          className="carousel-image img-fluid"
        />
        <Carousel.Caption>
          <h3>Lilo & Stitch</h3>
          <p>
            Lilo & Stitch is a 2002 American animated science fiction
            comedy-drama film
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.themoviedb.org/t/p/original/xD7yQyIZTU56OhzIjEa6FhD66Pe.jpg"
          className="carousel-image img-fluid"
        />
        <Carousel.Caption>
          <h3>Frozen II</h3>
          <p>
            Frozen 2, also known as Frozen II, is a 2019 American animated
            musical fantasy film
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="http://3.bp.blogspot.com/-0c_pIfJfg_4/VcgBucTA-qI/AAAAAAAACqY/bBHz_DE5Vw0/s1600/minions-2015-movie-wallpaper-poster-bob-kevin-stuart-poster-wallpaper-scarlet-overkill-sandra-bullock-despicable-me.jpg
          "
          className="carousel-image img-fluid"
        />
        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Minions</h3>
          <p style={{ color: "black" }}>
            Minions is a 2015 American animated comedy film
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
