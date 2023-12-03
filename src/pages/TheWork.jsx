export default function TheWork() {
  return (
    <div>
      <h1>The Work</h1>
      <div class="card" style={{ width: '18rem' }}>
        <img src="../assets/images/primal.png" class="card-img-top" alt="..."/> 
        <div class="card-body">
          <h5 class="card-title">Primal Planner</h5>
          <p class="card-text">
A collaborative project with 3 other student developers, Primal Planner is a fitness app that allows users to track their workouts. The app uses a MySQL database, handles routes with Express, and makes an API call for workout routines. The app is deployed on Heroku and uses the MVC paradigm.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }}>
        <img src="../assets/images/wow.png" class="card-img-top" alt="Picture of a Blog"/> 
        <div class="card-body">
          <h5 class="card-title">Handleblogs</h5>
          <p class="card-text">
            This is a simple blog. My first attempt at using Handlebars, and tying the front end and back end together. It uses a MySQL database and Express to handle routes. The app is deployed on Heroku and uses the MVC paradigm.
          </p>
          <a href="https://morning-falls-12589-743225784c59.herokuapp.com/" class="btn btn-primary">
            To Heroku!
          </a>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }}>
        <img src="../assets/images/factors.png" class="card-img-top" alt="Image of Search Engine"/>
        <div class="card-body">
          <h5 class="card-title">Factors</h5>
          <p class="card-text">
            A collaborative web app with 4 other student developers, Factors is a search engine that allows users to search for an actor or actress and see what movies they have been in. It uses the OMDB API to make the calls and is deployed on Github Pages.
          </p>
          <a href="https://brousy.github.io/factors/" class="btn btn-primary">
            FIND EM!
          </a>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }}>
        <img src="../assets/images/connect.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">ConnectUs</h5>
          <p class="card-text">
          ConnectUs is a powerful React application designed to streamline communication within a company across different departments. Built by a talented team consisting of Nelson, William, William, and Matthew, this project leverages GraphQL and MongoDB to provide a seamless and efficient communication platform.
          </p>
          <a href="#" class="btn btn-primary">
            Get Connected!
          </a>
        </div>
      </div>

      <div class="card" style={{ width: '18rem' }}>
        <img src="../assets/images/weather.png" class="card-img-top" alt="..."/> 
        <div class="card-body">
          <h5 class="card-title">WeatherGuy</h5>
          <p class="card-text">
           This simple web app uses the OpenWeather API to allow users to search for a city and see the current weather conditions as well as the 5 day forecast. It uses local storage to save the last city searched and is deployed on Github Pages.
          </p>
          <a href="https://ipv21.github.io/weatherguy/" class="btn btn-primary">
            5 Day Forecast...
          </a>
        </div>
      </div>
      
    </div>
  );
}
