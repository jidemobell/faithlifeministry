import Image from "next/image";

import './footer.css'

export default function Footer() {
  return (
    <footer className="s-footer">
      <div className="row footer-top">
        <div className="column large-4 medium-5 tab-full">
          <div className="footer-logo">
            <a className="site-footer-logo" href="index.html">
              <Image
                src="images/faithlife2.svg"
                alt="events"
                width={138}
                height={36}
                placeholder="blur"
                blurDataURL={"images/faithlife2.svg"}
              />
            </a>
          </div>
          {/* <!-- footer-logo --> */}
          <p>
            Laborum ad explicabo. Molestiae voluptates est. Quisquam labore
            tenetur et assumenda voluptatibus a beatae. Rerum odio ducimus
            reprehenderit sit animi laborum nostrum dolorum animi voluptates est
            voluptatibus a beatae.
          </p>
        </div>
        <div className="column large-half tab-full">
          <div className="row">
            <div className="column large-7 medium-full">
              <h4 className="h6">Our Location</h4>
              <p>
                {/* 1600 Amphitheatre Parkway <br />
                Mountain View, California <br />
                94043 US */}
                Loation info <br />
                here 
              </p>

              <p>
                <a
                  href="https://goo.gl/maps/bc7C7eYtSmnNs6216"
                  target="_blank"
                  className="btn btn--footer"
                >
                  Get Direction
                </a>
              </p>
            </div>
            <div className="column large-5 medium-full">
              <h4 className="h6">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="volunteer.html">Volunteer</a>
                </li>
                <li>
                  <a href="connect-group.html">Connect Groups</a>
                </li>
                <li>
                  <a href="events.html">Upcoming Events</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer-top --> */}

      <div className="row footer-bottom">
        <div className="column ss-copyright">
          <span>© Copyright faithlife 2023</span>
          <span>
            RedDesign by <a href="https://www.jidemobell.com/"> jidemobell </a>{"  "}
            using <a href="https://www.styleshout.com/">StyleShout template</a>
          </span>
        </div>
      </div>
      {/* <!-- footer-bottom --> */}

      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
          </svg>
        </a>
      </div>
      {/* <!-- ss-go-top --> */}
    </footer>
  );
}
