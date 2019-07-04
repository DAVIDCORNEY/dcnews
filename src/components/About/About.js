import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container mt-3">
        <h1>Welcome</h1>
        <hr />
        <h2 id="abouth2">Keeping you up to date with your favourite topics</h2>
        <div className="row mt-3">
          <div className="col-lg-12">
            <img
              src="https://res.cloudinary.com/dcs/image/upload/c_scale,w_1100/v1562265506/dcnews/dcnews_codehappy.jpg"
              className="img-fluid"
              id="aboutMainImg"
              alt="about page code happy"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 pt-0">
            <h3>Your Articles, Your Comments</h3>
            <p id="aboutText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              porta egestas lacus ut varius. Maecenas in lobortis tortor.
              Curabitur et tellus lobortis lectus consectetur convallis. Aliquam
              libero nulla, faucibus non placerat quis, ultrices sed justo.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Integer vitae dapibus eros.
              Maecenas vehicula lacinia elit quis molestie. Suspendisse rutrum,
              mi ut imperdiet accumsan, lectus est lacinia odio, volutpat
              aliquet tellus magna et nisi. Aliquam sodales commodo venenatis.
              Suspendisse tristique risus eu dictum laoreet. Duis porta lobortis
              ligula vitae sollicitudin. Aenean in pulvinar neque. Ut eget
              sodales massa. Sed ornare non tortor nec posuere. Phasellus
              aliquet sapien et tristique varius. Proin quis hendrerit nibh, a
              finibus dui. Maecenas tellus tortor, posuere scelerisque est eget,
              finibus lacinia mauris. Phasellus venenatis nulla feugiat lectus
              placerat, eu lacinia leo euismod.Proin quis hendrerit nibh, a
              finibus dui. Maecenas tellus tortor, posuere scelerisque est eget,
              finibus lacinia mauris. Phasellus venenatis nulla feugiat lectus
              placerat, eu lacinia leo euismod.Proin quis hendrerit nibh, a
              finibus dui. Maecenas tellus tortor, posuere scelerisque est eget,
              finibus lacinia mauris. Phasellus venenatis nulla feugiat lectus
              placerat, eu lacinia leo euismod.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://res.cloudinary.com/dcs/image/upload/q_61,w_600/v1562269420/dcnews/dcnews_cooking.jpg"
              className="img-fluid"
              id="aboutMainImg"
              alt="cooking"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
