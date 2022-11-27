import React from "react";

const NotFound = () => {
  return (
    <div className="permission_denied">
      <div>
        <title>Cubic | 404</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://raw.githubusercontent.com/tsparticles/404-templates/main/images/tsParticles-64.png"
        ></link>

        <div>
          <div id="tsparticles"></div>
          <div className="denied__wrapper">
            <h1>404</h1>
            <h3>
              LOST IN <span>SPACE</span> Cubic Anime? Hmm, looks like that page
              doesn't exist.
            </h3>
            <img
              id="astronaut"
              src="https://raw.githubusercontent.com/tsparticles/404-templates/main/space/images/astronaut.svg"
            />
            <img
              id="planet"
              src="https://raw.githubusercontent.com/tsparticles/404-templates/main/space/images/planet.svg"
            />
            <a href="/">
              <button className="denied__link">Go Home</button>
            </a>
          </div>

          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/tsparticles@2.3.4/tsparticles.bundle.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://raw.githubusercontent.com/tsparticles/404-templates/main/space/js/404.js"
          ></script>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
