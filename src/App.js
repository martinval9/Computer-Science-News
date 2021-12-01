const App = () => {
  return (
      <div className="App">
        <header>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/header.jpg" className="d-block w-100" alt="Abstract" title="Photo by Anni Roenkae from Pexels" />
                    <div className="carousel-caption d-md-block">
                        <h1>Computer Science News</h1>
                        <p>The Future is Today</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/header2.jpg" className="d-block w-100" alt="Abstract Wallpaper" title="Photo by Bruno Thethe from Pexels" />
                    <div className="carousel-caption d-md-block">
                        <h1>Simple to use</h1>
                        <p>Small and simple to use</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="img/header3.jpg" className="d-block w-100" alt="Aurora Background" title="Photo by stein egil liland from Pexels" />
                    <div className="carousel-caption d-md-block">
                        <h1>Sources</h1>
                        <p><a href="https://github.com/martinval9/Computer-Science-News/" target="_blank"
                                rel="noopener noreferrer">GitHub of the Computer Science News</a></p>
                    </div>
                </div>
            </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
        </header>

          <section>
              <br />
              <div className="arrow"></div>
              <div className="scroll_down">Scroll Down</div>
          </section>
      </div>
  );
}

export default App;
