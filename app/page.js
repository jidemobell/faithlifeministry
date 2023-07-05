import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div id="top">
        {/* <div> */}
          {/* <!-- hero ================================================== --> */}
          <section
            // style={{ border: `3px solid red`}}
            className="s-hero bg-blend-multiply	bg-gradient-to-t"
            data-parallax="scroll"
            data-image-src="images/hero-bg-3000.jpg"
            data-natural-width="3000"
            data-natural-height="2000"
            data-position-y="center"
            // style={{ backgroundImage: `url('images/high.jpg')`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}
            style={{ backgroundImage: `url('images/high.jpg')`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}
          >
            <div className="hero-left-bar"></div>
            <div className="row hero-content" >
              <div className="column large-full hero-content__text">
                <h1>
                  {/* We Exist To <br />
                  Honor God And <br />
                  Make Disciples */}
                  We Nuture Ourselves <br /> To The Transformative <br /> Power Of the Holy Spirit.
                </h1>
                <div className="hero-content__buttons">
                  <a href="events.html" className="btn btn--stroke">
                    Our Events
                  </a>
                  <a href="about.html" className="btn btn--stroke">
                    About Us
                  </a>
                </div>
              </div>
              {/* <!-- end hero-content__text --> */}
            </div>
            {/* <!-- end hero-content --> */}
            <ul className="hero-social">
              <li className="hero-social__title">Follow Us</li>
              <li>
                <a href="#0" title="">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#0" title="">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#0" title="">
                  Instagram
                </a>
              </li>
            </ul>
            {/* <!-- end hero-social --> */}
            <div className="hero-scroll">
              <a href="#about" className="scroll-link smoothscroll">
                Scroll For More
              </a>
            </div>
            {/* <!-- end hero-scroll --> */}
          </section>

          {/* <!-- about ================================================== --> */}
          <section id="about" className="s-about bg-green-400">
            <div className="row row-y-center about-content">
              <div className="column large-half medium-full">
                <h3 className="subhead">Welcome to FaithLife</h3>
                <p className="lead">
                  Vero autem et officiis officia sint in odio in iusto.
                  Blanditiis tempore ipsa saepe quaerat quas sed. Ut velit
                  necessitatibus est repellat sunt quia fuga doloremque. Nostrum
                  et ut optio suscipit eos quisquam et. Nulla molestiae
                  voluptates hic et accusantium occaecati recusandae veniam cum.
                </p>
                <a href="about.html" className="btn btn--primary btn--about">
                  More About FaithLife
                </a>
              </div>

              <div className="column large-half medium-full">
                <ul className="about-sched">
                  <li>
                    <h4>Wednesday Power Meeting</h4>
                    <p>
                      Wednesday - 3:00 PM |  <br />
                      ZOOM CONNECT
                    </p>
                  </li>
                  <li>
                    <h4>Saturday Worship</h4>
                    <p>
                      Sunday - 9:00 AM | 1:00 PM | 4:30 PM <br />
                      {/* 1600 Amphitheatre Parkway, Mt. View, CA, 94043 */}
                    </p>
                  </li>
                  <li>
                    <h4>Prayer Meeting</h4>
                    <p>
                      Saturday - 7:00 PM <br />
                      {/* 1600 Amphitheatre Parkway, Mt. View, CA, 94043 */}
                    </p>
                  </li>
                </ul>
                {/* <!-- end about-sched--> */}
              </div>
            </div>
            {/* <!-- end about-content --> */}
          </section>
          {/* <!-- end s-about --> */}

          {/* <!-- connect================================================== --> */}
          <section className="s-connect">
            <div className="row connect-content">
              <div className="column large-half tab-full">
                <h3 className="display-1">Volunteer With Us.</h3>
                <p>
                  Delectus distinctio fuga commodi quod temporibus consequatur.
                  Voluptatem dolor vel impedit. Totam ut vel nihil ab. Nostrum
                  ipsa necessitatibus. Iste voluptatibus qui velit et voluptatem
                  laudantium et explicabo. Dignissimos ut voluptatum laboriosam
                  nisi fugiat. Nulla dolores voluptate sit unde in doloribus
                  est. Eveniet qui et quia pariatur consequatur officia facere
                  aut.
                </p>

                <a
                  href="volunteer.html"
                  className="btn btn--primary h-full-width"
                >
                  I{`&apos;`}m Interested
                </a>
              </div>
              <div className="column large-half tab-full">
                <h3 className="display-1">Join a Connect Group.</h3>
                <p>
                  Officia earum at quia recusandae. Tempora beatae est aliquam
                  fugiat sed et. Exercitationem vitae molestiae officia eos aut
                  id ad. Et exercitationem quae perspiciatis mollitia. Laborum
                  quasi inventore eaque quia non. Ipsa dignissimos ipsum nisi
                  qui eos et iste magnam. Aut dolorum mollitia illum. Iste iure
                  similique nobis fuga est amet.
                </p>

                <a
                  href="connect-group.html"
                  className="btn btn--primary h-full-width"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* <!-- end connect-content  --> */}
          </section>
          {/* <!-- end s-connect --> */}

          {/* <!-- events================================================== --> */}
          <section className="s-events">
            <div className="row events-header">
              <div className="column">
                <h2 className="subhead">Upcoming Events.</h2>
              </div>
            </div>
            {/* <!-- end event-header --> */}

            <div className="row block-large-1-2 block-900-full events-list">
              <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                  <a href="#0" title="">
                    2019 Kids Church Camp.
                  </a>
                </h3>
                <p>
                  Et consequatur nihil odio odit voluptatem qui. Dolores
                  doloribus cupiditate totam esse dolores quod. Magni aut
                  incidunt fugiat labore est ut non ipsam nihil. Voluptate rerum
                  dolores unde voluptas. Et similique praesentium dolor. Et quod
                  eius sint at quae est dolores. Beatae quo facere hic.
                </p>
                <ul className="events-list__meta">
                  <li className="events-list__meta-date">
                    Saturday, September 28, 2019
                  </li>
                  <li className="events-list__meta-time">8:00AM - 5:30PM</li>
                  <li className="events-list__meta-location">
                    1600 Amphitheatre Parkway, Mt. View
                  </li>
                </ul>
              </div>
              {/* <!-- end events-list__item --> */}
              <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                  <a href="#0" title="">
                    Prayer Meeting.
                  </a>
                </h3>
                <p>
                  Laborum distinctio minima doloribus reiciendis aut aliquid.
                  Deleniti est adipisci ut quo ducimus eum ratione voluptas.
                  Voluptatem tenetur rem ratione velit ut. Repudiandae atque
                  perspiciatis est similique rerum nam qui iusto minus. Sapiente
                  porro dolores consequatur optio animi aut facere.
                </p>
                <ul className="events-list__meta">
                  <li className="events-list__meta-date">
                    Saturday, July 27, 2019
                  </li>
                  <li className="events-list__meta-time">6:00PM - 8:30PM</li>
                  <li className="events-list__meta-location">
                    1600 Amphitheatre Parkway, Mt. View
                  </li>
                </ul>
              </div>
              {/* <!-- end events-list__item --> */}
              <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                  <a href="#0" title="">
                    Youth Convergence.
                  </a>
                </h3>
                <p>
                  Laborum distinctio minima doloribus reiciendis aut aliquid.
                  Deleniti est adipisci ut quo ducimus eum ratione voluptas.
                  Voluptatem tenetur rem ratione velit ut. Repudiandae atque
                  perspiciatis est similique rerum nam qui iusto minus. Sapiente
                  porro dolores consequatur optio animi aut facere.
                </p>
                <ul className="events-list__meta">
                  <li className="events-list__meta-date">
                    Friday, July 26, 2019
                  </li>
                  <li className="events-list__meta-time">5:00PM - 6:30PM</li>
                  <li className="events-list__meta-location">
                    1600 Amphitheatre Parkway, Mt. View
                  </li>
                </ul>
              </div>
              {/* <!-- end events-list__item --> */}
              <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                  <a href="#0" title="">
                    Leadership Conference.
                  </a>
                </h3>
                <p>
                  Optio temporibus suscipit magnam. Consequatur doloribus sed.
                  Explicabo molestiae est minima. Distinctio quis optio
                  architecto molestiae officia molestiae qui veniam minima. Nemo
                  placeat ex dolor ratione qui autem eius vel. In dolorem aut
                  enim aspernatur molestias nostrum.
                </p>
                <ul className="events-list__meta">
                  <li className="events-list__meta-date">
                    Sunday, July 28, 2019
                  </li>
                  <li className="events-list__meta-time">2:00PM - 5:30PM</li>
                  <li className="events-list__meta-location">
                    1600 Amphitheatre Parkway, Mt. View
                  </li>
                </ul>
              </div>
              {/* <!-- end events-list__item --> */}
            </div>
            {/* <!-- end events-list --> */}
          </section>
          {/* <!-- end s-events --> */}
          {/* <!-- series================================================== --> */}
          <section className="s-series">
            <div
              className="series-img"
              style={{ backgroundImage: `url('images/sincerelymedia.jpg')` }}
            ></div>

            <div className="row row-y-center series-content">
              <div className="column large-half medium-full">
                <h3 className="subhead">Current Series</h3>
                <h2>Shape Your Life with the Words of Life.</h2>
                <p>
                  Aut sed amet et quis aliquid laborum minus consequatur. Animi
                  repellendus quas. Est voluptates minima ut dolorum aliquid
                  sint. Ratione et et molestias rerum quibusdam. Deserunt
                  suscipit ut expedita. Non numquam aut eum perferendis
                  molestiae praesentium aliquid voluptatum numquam dolorum
                  aliquid sint minima.
                </p>
              </div>
              {/* <!-- end column --> */}

              <div className="column large-half medium-full">
                <div className="series-content__buttons">
                  <a href="" className="btn btn--large h-full-width">
                    Watch the Video
                  </a>
                  <a href="" className="btn btn--large h-full-width">
                    Listen To the Message
                  </a>
                </div>

                <div className="series-content__subscribe">
                  <p>
                    Never missed a message. Subscribe to our YouTube and Podcast
                    channels.
                  </p>

                  <ul className="series-content__subscribe-links">
                    <li className="ss-apple-podcast">
                      <a href="#0">Apple Podcast</a>
                    </li>
                    <li className="ss-spotify">
                      <a href="#0">Spotify</a>
                    </li>
                    <li className="ss-soundcloud">
                      <a href="#0">SoundCloud</a>
                    </li>
                    <li className="ss-youtube">
                      <a href="#0">Youtube</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end column --> */}
            </div>
            {/* <!-- series-content --> */}
          </section>
          {/* <!-- end s-series --> */}
          {/* <!-- Social ================================================== --> */}
          <section className="s-social">
            <div className="row social-content">
              <div className="column">
                <ul className="social-list">
                  <li className="social-list__item">
                    <a href="#0" title="">
                      <span className="social-list__icon social-list__icon--facebook"></span>
                      <span className="social-list__text">Facebook</span>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="#0" title="">
                      <span className="social-list__icon social-list__icon--twitter"></span>
                      <span className="social-list__text">Twitter</span>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="#0" title="">
                      <span className="social-list__icon social-list__icon--instagram"></span>
                      <span className="social-list__text">Instagram</span>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a href="#0" title="">
                      <span className="social-list__icon social-list__icon--email"></span>
                      <span className="social-list__text">Email</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- end social-content --> */}
          </section>
          {/* <!-- end s-social --> */}

          {/* <!-- footer ================================================== --> */}
          <Footer />
          {/* <!-- end s-footer --> */}

          {/* <!-- Java Script================================================== --> */}
          {/* <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script> */}
        </div>
      </div>
    </main>
  );
}
