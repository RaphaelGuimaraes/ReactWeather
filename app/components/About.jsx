var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application build on React.</p>
			<p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
					</li>
					<li>
						<a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map API to search for weather data by city name.
					</li>
					<li>
						<a href="http://foundation.zurb.com/">Foudation</a> - This was the front-end framework used.
					</li>
				</ul>
			</p>
		</div>
	);
}

module.exports = About;