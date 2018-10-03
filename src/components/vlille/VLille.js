import axios from 'axios'
import "leaflet/dist/leaflet.css"

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
  name: 'vLille',
  data() {
    return {
      vlille: [],
      nbhits : 0,
      start: 0,
      optionOpened : false,
      commune: 'ALL',
      position: 'topright',
      mapOptions: { zoomControl: false, attributionControl: false },
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  created() {
    let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime&rows=10";
    axios(url)
    .then(response => {
      this.nbhits = response.data.nhits;
      this.vlille = response.data.records;
    })
    .catch(e => {
      console.log("Erreur !!", e);
    });


  },
  mounted() {
    //do something after mounting vue instance
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject // work as expected
      // disabled wheel zoom
      // this.map.scrollWheelZoom.disable();
    });

    // Avoid that the map doesn't display
    setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 300);
  },
  methods: {
    suivant() {
      this.start += 10;
      let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime&start=" + this.start;

      if(this.commune != 'ALL')
        url = url + "&refine.commune=" + this.commune;

      axios(url)
      .then(response => {
        this.vlille = response.data.records;
      })
      .catch(e => {
        console.log("Erreur !!", e);
      });
    },
    precedent() {
      this.start -=10;
      let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime&start=" + this.start;

      if(this.commune != 'ALL')
        url = url + "&refine.commune=" + this.commune;

      axios(url)
      .then(response => {
        this.vlille = response.data.records;
      })
      .catch(e => {
        console.log("Erreur !!", e);
      });
    },
    option() {
      this.optionOpened = !this.optionOpened;
    },
    search() {
      let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime&rows=10";
      if(this.commune != 'ALL')
        url = url + "&refine.commune=" + this.commune;

      axios(url)
      .then(response => {
        this.nbhits = response.data.nhits;
        this.vlille = response.data.records;
        this.start = 0;
      })
      .catch(e => {
        console.log("Erreur !!", e);
      });
    }
  }
};
