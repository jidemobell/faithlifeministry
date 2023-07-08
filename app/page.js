"use client";

import React from "react";
// import $ from "jquery";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Events from "@/components/events";
import Series from "@/components/series";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div id="top animate__fadeInDown">
          {/* <div> */}
          {/* <!-- hero ================================================== --> */}
          <Hero />
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
                      Wednesday - 3:00 PM | <br />
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
          <Events />
          {/* <!-- end s-events --> */}
          {/* <!-- series================================================== --> */}
          <Series />
          {/* <!-- end s-series --> */}
          {/* <!-- Social ================================================== --> */}
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
