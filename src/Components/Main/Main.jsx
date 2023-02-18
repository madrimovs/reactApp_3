function Main() {
	return (
		<>
			<section id="about" class="p-5">
				<div class="container text-center">
					<div class="pb-5">
						<h3 class="display-4">Why this App is so awsome</h3>
						<p>This is why this app is so awsome, you'll never need another one!</p>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4">
							<div class="card">
								<img
									src="https://images.unsplash.com/photo-1464986411762-a4275fbaf3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">
										<span>
											<i class="fas fa-mobile"></i>
										</span>
										<br />
										Card title
									</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make up the bulk of the card's
										content.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card">
								<img
									src="https://images.unsplash.com/photo-1493500146995-7167488df174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">
										<span>
											<i class="fas fa-mobile-alt"></i>
										</span>
										<br />
										Card title
									</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make up the bulk of the card's
										content.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="card">
								<img
									src="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
									class="card-img-top"
									alt="..."
								/>
								<div class="card-body">
									<h5 class="card-title">
										<span>
											<i class="fas fa-sms"></i>
										</span>
										<br />
										Card title
									</h5>
									<p class="card-text">
										Some quick example text to build on the card title and make up the bulk of the card's
										content.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="download">
				<div class="jumbotron jumbotron-fluid mb-0">
					<div class="container text-center">
						<h4 class="display-4">Get the App</h4>
						<p class="lead">Download MyApp for iPhone or Android</p>
					</div>

					<div class="container">
						<div class="row justify-content-center">
							<button href="/" class="downloadBtn">
								<div class="row">
									<div class="col-3">
										<p class="appLogo">
											<i class="fab fa-apple"></i>
										</p>
									</div>
									<div class="col-9">
										<p>
											Available on the
											<br />
											<span class="store">App Store</span>
										</p>
									</div>
								</div>
							</button>
							<button href="/" class="downloadBtn">
								<div class="row">
									<div class="col-3">
										<p class="appLogo">
											<i class="fab fa-google-play"></i>
										</p>
									</div>
									<div class="col-9">
										<p>
											Download from
											<br />
											<span class="store">Google Play</span>
										</p>
									</div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Main;
