import axios from 'axios'
import "leaflet/dist/leaflet.css"

export default {
  name: 'vLille',
  data() {
    return {
      vlille: [],
      nbhits : 0,
      start: 0,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  },
  created() {
    let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime";
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
    })
  },
  methods: {
    suivant() {
      this.start += 10;
      let url = "https://opendata.lillemetropole.fr/api/records/1.0/search//?dataset=vlille-realtime&start=" + this.start;
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
      axios(url)
      .then(response => {
        this.vlille = response.data.records;
      })
      .catch(e => {
        console.log("Erreur !!", e);
      });
    }
  }
};
