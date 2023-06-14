import React from 'react'
// import './css/swiper-bundle.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import './js/swiper-bundle.min';
export function AboutUs() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About</title>
  {/* Swiper CSS */}
  <link rel="stylesheet" href="swiper-bundle.min.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            /* Google Fonts - Poppins */\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');\n\n.logo img{\n    width: 65px;\n    margin: 0;\n    padding: 0 0 1px;\n    position: absolute;\n    top: 10%;\n    Left: 1%\n}\n.college,h4{\n  color: red;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.Boxx{\n    /* border: 1px solid grey; */\n            /* max-width: 1000px; */\n            /* width: 100vh; */\n            background-color: black;\n            margin-left: 110px;\n            margin-right: 100px;\n            justify-content: center;\n            margin-top: 10px;\n            margin-bottom: 30px;\n}\na{\n    text-decoration: none;\n}\n.content{\n\n    overflow: hidden;\n   max-height: 0px;\n   \n    transition: max-height 0.5s ease;\n\n}\n.content:target{\n    max-height: 150px;\n\n    \n}\n.content p{\n    padding: 20px;\n    color: gold;\n    font-family:'Times New Roman', Times, serif;\n}\n.title{\n    display: block;\n    padding: 10px;\n    background-color: rgb(225, 243, 205);\n    color: brown;\n    transition: background-color 0.5s;\n}\n.title:hover{\n    color: white;\n    background-color: rgb(14, 235, 238);\n    \n}\n\n\n*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\nbody{\n  min-height: 100vh;\n  /* display: flex; */\n  align-items: center;\n  justify-content: center;\n  /* background-color: #EFEFEF; */\n  background-image: url(https://wallpapercave.com/wp/wp2370511.jpg);\n  background-size: cover;\n}\n.slide-container{\n  max-width: 1120px;\n display:inline;  width: 100%;\n  padding: 40px 0;\n  margin-top: -50px;\n  /* align-items: center; */\n}\n.slide-content{\n  margin: 0 40px;\n  overflow: hidden;\n  border-radius: 25px;\n}\n.card{\n  border-radius: 25px;\n  background-color: #FFF;\n}\n.image-content,\n.card-content{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 14px;\n}\n.image-content{\n  position: relative;\n  row-gap: 5px;\n  padding: 25px 0;\n}\n.overlay{\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #4070F4;\n  border-radius: 25px 25px 0 25px;\n}\n.overlay::before,\n.overlay::after{\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: -40px;\n  height: 40px;\n  width: 40px;\n  background-color: #4070F4;\n}\n.overlay::after{\n  border-radius: 0 25px 0 0;\n  background-color: #FFF;\n}\n.card-image{\n  position: relative;\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  background: #FFF;\n  padding: 3px;\n}\n.card-image .card-img{\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 4px solid #4070F4;\n}\n.name{\n  font-size: 18px;\n  font-weight: 500;\n  color: #333;\n  font-weight: bold;\n}\n.description{\n  font-size: 14px;\n  color: #707070;\n  text-align: center;\n}\n.button{\n  border: none;\n  font-size: 16px;\n  color: #FFF;\n  padding: 8px 16px;\n  background-color: #833ac7;\n  border-radius: 6px;\n  margin: 14px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.button:hover{\n  background: rgb(53, 53, 212);\n  color: white;\n}\na{\n  color: white;\n}\n\n.swiper-navBtn{\n  color: white;\n  transition: color 0.3s ease;\n}\n.swiper-navBtn:hover{\n  color: #4070F4;\n}\n.swiper-navBtn::before,\n.swiper-navBtn::after{\n  font-size: 35px;\n}\n.swiper-button-next{\n  right: 0;\n}\n.swiper-button-prev{\n  left: 0;\n}\n.swiper-pagination-bullet{\n  background-color: #6E93f7;\n  opacity: 1;\n}\n.swiper-pagination-bullet-active{\n  background-color: white;\n}\n\n@media screen and (max-width: 768px) {\n  .slide-content{\n    margin: 0 10px;\n  }\n  .swiper-navBtn{\n    display: none;\n  }\n}\n.scroll{\n  background-color: black;\n  font-size: 16px;\n  color: blue;\n  font-weight: bold;\n}\nmarquee:hover{\n  background-color: rgb(37, 125, 172);\n  margin-top: 3px;\n}\na{\n  text-decoration: none;\n}\n\nheader{\n  text-align: center;\n  background-color: rgb(140, 249, 6);\n  position: sticky;\n  width: 100%;\n  height: 90px;\n  margin-top: 0px;\n}\n.nav a{\n  text-decoration: none;\n  /* display: inline-block; */\n  /* display: inline; */\n}\nul{\n  list-style-type: none;\n  margin-top: 20px;\n}\nul li{\n  display: inline-block;\n}\nul li a{\n  color: black;\n  padding: 5px 40px;\n  border: 1px solid black;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  transition: 0.6s ease;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\nul li a:hover{\n  background-color: lightcoral;\n  color: black;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n.scroll,a{\n  color: black;\n}\nmarquee,a{\n  color: black;\n}\n.scroll,a:hover{\n  font-family: Arial, Helvetica, sans-serif;\n  color: blue;\n}\nheader,h1{\n  font-family: 'Times New Roman', Times, serif;\n}\n\n.button,a{\n  color: white;\n}\na:hover{\n  color: white;\n}\n        "
    }}
  />
  <header>
    <h1>Online Easy Shop Finder,Gooty</h1>
    <div className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/AboutUs"> About us</a>
        </li>
        <li>
          <a href="ContactUs">Contact us</a>
        </li>
        <li>
          <a href="LoginPage">Logout</a>
        </li>
      </ul>
    </div>
    <div className="logo">
      <img src={require("./Assets/about.png")} />
    </div>
  </header>
  <div className="scroll">
    <marquee behavior="scroll" direction="" scrollamount={15}>
      <a href="/VisitPage">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click
        Here ---&gt; to Visit some Famous and Historical places in Gooty Town
        and nearby
        Gooty.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(:---------Thank
        You----------:)
      </a>{" "}
    </marquee>
  </div>
  {/* <div class="logo">
      <img src="../about.png">
    </div> */}
  <div className="Boxx">
    <div className="item">
      <a href="#t1" className="title">
        <b>Vision</b>
      </a>
      <div id="t1" className="content">
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our
          vision is to create a convenient and accessible shopping and
          Appointments experience for everyone in Gooty, where finding shops
          becomes effortless, allowing individuals to explore a diverse range of
          products and services easily.We aim to be the go-to platform that
          simplifies the shopping experience, enhancing convenience and saving
          valuable time for our users.
        </p>
      </div>
    </div>
    <div className="item ">
      <a href="#t2" className="title">
        <b>Mission</b>
      </a>
      <div id="t2" className="content">
        <p>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our
          mission is to develop a comprehensive platform that seamlessly
          connects consumers with local shops, providing them with accurate and
          up-to-date information on shop locations, offerings, and opening
          hours, empowering them to make informed choices and support local
          businesses.we strive to create a seamless shopping experience that
          fosters satisfaction and loyalty among both consumers and retailers.
        </p>
      </div>
    </div>
  </div>
  <div className="slide-container swiper">
    <div className="slide-content">
      <div className="card-wrapper swiper-wrapper">
        <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={require("./Assets/Pradeep.jpg")} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">AP Pradeep</h2>
            <h4 className="College">GATES Institute of Technology</h4>
            <p className="description">
              &nbsp;&nbsp; Hello! I'm pursuing{" "}
              <b>3rd B.Tech - Department of ECE</b>, I am passionate and have
              developed a strong foundation of my knowledge in my field of study
              and I excel at problem-solving and enjoy leveraging my creativity
              to find innovative solutions.
            </p>
            <button className="button">
              <a href="https://www.instagram.com/ap_the_mr.introvert">
                Follow me @Insta
              </a>
            </button>
          </div>
        </div>
        <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={require("./Assets/Mansoor.jpg")} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">S Mansoor</h2>
            <h4 className="College">GATES Institute of Technology</h4>
            <p className="description">
              &nbsp;&nbsp;Aloha! As{" "}
              <b>I am 3rd B.Tech professional Student of ECE</b>, I have a
              strong track record of success in my field,My skills, knowledge,
              and accomplishments position you as a valuable asset, capable of
              making significant contributions to&nbsp;my career.
            </p>
            <button className="button">
              <a href="https://www.instagram.com/mr_mysore_official_143">
                Follow me @Insta
              </a>
            </button>
          </div>
        </div>
        <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={require("./Assets/Nagaraju.jpg")} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">P Nagaraju</h2>
            <h4 className="College">GATES Institute of Technology</h4>
            <p className="description">
              Hello! <b>I am studying 3rd B.tech department of ECE</b>, I am
              Self-Confident and Self-Lerner &amp; also more interested to do
              learn new things,&amp; I like to do Team work and I have
              leadership qualities, so with these I am able to
              build&nbsp;my&nbsp;career...
            </p>
            <button className="button">
              <a href="https://instagram.com/__________r.a.j.u__________?igshid=MzRlODBiNWFlZA==">
                Follow me @Insta
              </a>
            </button>
          </div>
        </div>
        <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={require("./Assets/Rachitha.jpg")} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">D Rachitha</h2>
            <h4 className="College">GATES Institute of Technology</h4>
            <p className="description">
              Hii! as <b>I am 3rd B.Tech professional student of ECE</b>, My
              skills are Strong Foundation in web develpoement and Team work
              &amp; collaboration,and design innovation and creativeness
              Research &amp; Self Learning these are the ways to
              build&nbsp;my&nbsp;carrer.
            </p>
            <button className="button">
              <a href="https://www.instagram.com/_miss.cutieee">
                Follow me @Insta
              </a>
            </button>
          </div>
        </div>
        <div className="card swiper-slide">
          <div className="image-content">
            <span className="overlay" />
            <div className="card-image">
              <img src={require("./Assets/Leena.jpg")} alt="" className="card-img" />
            </div>
          </div>
          <div className="card-content">
            <h2 className="name">S Leena</h2>
            <h4 className="College">GATES Institute of Technology</h4>
            <p className="description">
              Hello! <b>I am Pursuing my 3rd B.Tech,dept. of ECE.</b>Hopefully I
              have strong knowledge on developing web creation and CAO.as I have
              more interest in learning about the new ideas which I always crave
              for building my career and develop my interpersonal skills.
            </p>
            <button className="button">
              <a href="https://instagram.com/leena__24__?igshid=MzRlODBiNWFlZA==">
                Follow me @Insta
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-button-next swiper-navBtn" />
    <div className="swiper-button-prev swiper-navBtn" />
    <div className="swiper-pagination" />
  </div>
  {/* Swiper JS */}
  {/* JavaScript */}
  
</>

  )
}
