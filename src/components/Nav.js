const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
        <img src="img/favicon.png" alt="Computer Science News Logo" id="nav-favicon" />
          <span className="navbar-brand"> Computer Science News</span>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="btn-menu">
            <i className="fas fa-bars"></i>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="https://distracted-pike-f5cc48.netlify.app/index.html">Home</a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="https://distracted-pike-f5cc48.netlify.app/about/about.html">About</a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="https://github.com/martinval9/">My GitHub</a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="https://distracted-pike-f5cc48.netlify.app/more_news/more_news.html">Do you want more news?</a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="#" id="light_theme" title="Toogle Light Mode"><i className="fas fa-sun"></i></a>
						</li>

						<li className="nav-item">
							<a className="nav-link active" href="#" id="dark_theme" title="Toogle Dark Mode"><i className="fas fa-moon"></i></a>
						</li>
					</ul>
        </div>
      </div>
    </nav>
	)
}

export default Nav
