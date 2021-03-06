import { useState, useEffect, useRef } from "react";
import contactData from "../data/contacts.json";

function importAll(r) {
  return r.keys().map(r);
}

const icons = importAll(require.context("../data/img", false, /\.(svg)$/));
const matchImage = (images, str) => {
  let link = "";
  images.find((elem) => {
    if (elem.includes(str)) {
      link = elem;
    }
  });
  return link;
};
const Projects = (props) => {
  useEffect(() => {});
  return (
    <div className="section" data-anchor="contact" data-index="4">
      <div className="contactContainer">
        {contactData.map((contact, idx) => {
          return (
            <div className={"contact--" + contact.name}>
            <a href={contact.link} target="_blank" data-aos="fade-in" data-aos-delay={idx * 100}>
              {contact.name == "github" ? (
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              ) : null}
              {contact.name == "linkedin" ? (

                <svg
                	 viewBox="0 0 291.319 291.319"  >
                <g>
                	<path d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66
                		S65.21,0,145.659,0z"/>
                	<path d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077
                		c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593
                		s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141
                		c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"/>
                </g>

                </svg>

              ) : null}
              {contact.name == "email" ? (
                <svg viewBox="0 0 299.997 299.997">
                  <g>
                    <g>
                      <path
                        d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
          			C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009
          			c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749
          			l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721
          			c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0
          			c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721
          			c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749
          			V196.423z"
                      />
                    </g>
                  </g>
                </svg>
              ) : null}
                </a>
            </div>

          );
        })}
      </div>
    </div>
  );
};
export default Projects;
