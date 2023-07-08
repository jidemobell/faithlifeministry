import "./series.css"

export default function Series (){
  return (
    <>
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
    </>
  )
}