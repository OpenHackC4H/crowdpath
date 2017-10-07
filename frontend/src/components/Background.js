import React, { Component } from "react";

import Particles from "react-particles-js";

class Background extends Component {
  render() {
    const style = {
      background: "#852F5C"
    };

    const params = {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: "#fff",
          opacity: 0.8
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#fff"
          }
        },
        polygon: {
          nb_sides: 6
        },
        line_linked: {
          shadow: {
            enable: false,
            blur: 5
          }
        }
      }
    };
    return <Particles style={style} params={params} />;
  }
}

export default Background;
