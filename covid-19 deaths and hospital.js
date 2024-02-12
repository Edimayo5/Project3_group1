import sqlite3
import pandas as pd
from flask import *
app = Flask(__name__)
@app.route("/")
def show_graph():
    connection = sqlite3.connect('recruit.db')

    Plot_df_new = Plot_df_new.drop(['hospitalised_count', 'death_count'])
    Plot_df_new.columns = ['hospitalised_count', 'death_count']
    data = Plot_df_new.to_json()
    return render_template('display.html',data)


if __name__ == "__main__":
    app.run()

canvas = {
  const context = DOM.context2d(width, height);
  const path = d3.geoPath(projection, context);
  while (true) {
    for (let i = 0, n = 480; i < n; ++i) {
      const t = d3.easeCubic(2 * i > n ? 2 - 2 * i / n : 2 * i / n);
      projection.alpha(t).rotate(rotate(t)).scale(scale(t));
      context.clearRect(0, 0, width, height);
      context.beginPath();
      path(graticule);
      context.lineWidth = 1;
      context.strokeStyle = "#aaa";
      context.stroke();
      context.beginPath();
      path(sphere);
      context.lineWidth = 1.5;
      context.strokeStyle = "#000";
      context.stroke();
      context.beginPath();
      path(equator);
      context.lineWidth = 1.5;
      context.strokeStyle = "#f00";
      context.stroke();
      yield context.canvas;
    }
  }
}

function interpolateProjection(raw0, raw1) {
    const mutate = d3.geoProjectionMutator(t => (x, y) => {
      const [x0, y0] = raw0(x, y), [x1, y1] = raw1(x, y);
      return [x0 + t * (x1 - x0), y0 + t * (y1 - y0)];
    });
    let t = 0;
    return Object.assign(mutate(t), {
      alpha(_) {
        return arguments.length ? mutate(t = +_) : t;
      }
    });
  }

  projection = interpolateProjection(d3.geoOrthographicRaw, d3.geoEquirectangularRaw)
    .scale(scale(0))
    .translate([width / 2, height / 2])
    .rotate(rotate(0))
    .precision(0.1)

    rotate = ƒ(t)
    rotate = d3.interpolate([10, -20], [0, 0])

    scale = ƒ(r)
    scale = d3.interpolate(width / 4, (width - 2) / (2 * Math.PI))

    height = 1430
    height = width / 1.8

    equator = Object {type: "LineString", coordinates: Array(5)}
    equator = ({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})

    sphere = Object {type: "Sphere"}
    sphere = ({type: "Sphere"})

    graticule = Object {type: "MultiLineString", coordinates: Array(53)}
    graticule = d3.geoGraticule10()

    d3 = Object {
        geoAlbers: ƒ()
        geoAlbersUsa: ƒ()
        geoArea: ƒ(n)
        geoAzimuthalEqualArea: ƒ()
        geoAzimuthalEqualAreaRaw: ƒ(t, r)
        geoAzimuthalEquidistant: ƒ()
        geoAzimuthalEquidistantRaw: ƒ(t, r)
        geoBounds: ƒ(n)
        geoCentroid: ƒ(n)
        geoCircle: ƒ()
        geoClipAntimeridian: ƒ(o)
        geoClipCircle: ƒ(n)
        geoClipExtent: ƒ()
        geoClipRectangle: ƒ(n, e, i, o)
        geoConicConformal: ƒ()
        geoConicConformalRaw: ƒ(n, t)
        geoConicEqualArea: ƒ()
        geoConicEqualAreaRaw: ƒ(n, t)
        
    d3 = require("d3-geo@2", "d3-interpolate@2", "d3-ease@2")
