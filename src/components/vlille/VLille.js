import axios from 'axios'

export default {
  name: 'vLille',
  data() {
    return {
      vlille: [],
      nbhits : 0,
      start: 0
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
      console.log("Erreur !!");
    });
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
        console.log("Erreur !!");
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
        console.log("Erreur !!");
      });
    }
  }
};
