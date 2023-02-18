function Header() {
	return (
		<header id="home">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
				<div class="container-fluid">
					<a class="navbar-brand" href="/mainNav" id="logoBrand">
						<span>
							<i class="fab fa-buromobelexperte"></i>
						</span>{" "}
						MyApp
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="/navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto pt-2">
							<li class="nav-item">
								<a class="nav-link" href="/home">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/about">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/download">
									Download the App
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/contact">
									Contact
								</a>
							</li>
						</ul>

						<form class="form-inline my-2 my-lg-0 pt-2">
							<input class="form-control mr-sm-2" type="email" placeholder="email" aria-label="email" />
							<input
								class="form-control mr-sm-2"
								type="password"
								placeholder="password"
								aria-label="password"
							/>
							<button class="btn btn-outline-primary btn-sm my-2 my-sm-0" type="submit">
								Login
							</button>
						</form>
					</div>
				</div>
			</nav>
			<div class="jumbotron text-center mt-5" id="mainHeader">
				<div class="container">
					<h1 class="display-3">Awesome App</h1>
					<p class="lead">This is a fantastic app.</p>

					<hr class="my-4" />
					<p>Want to know more? Join our mailing list</p>

					<div class="container">
						<form class="form-inline justify-content-center">
							<label class="sr-only" for="inlineFormInputGroupUsername2">
								Your Email
							</label>
							<div class="input-group mb-2 mr-sm-2">
								<div class="input-group-prepend">
									<div class="input-group-text">@</div>
								</div>
								<input
									type="text"
									class="form-control"
									id="inlineFormInputGroupUsername2"
									placeholder="Your Email"
								/>
							</div>
							<button type="submit" class="btn btn-primary mb-2">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
