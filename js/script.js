var quotesURL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

$(document).ready(function() {
    $('#app').fadeIn("slow");
});

var app = new Vue({
  el: '#app',
  data: {
    quote: "",
    person: "Ron Swanson Quotes"
  },
  created: function () {
    this.fetchQuote();
  },
  methods: {
    fetchQuote: function () {
      var self = this;
      var quote;
        this.$http.get(quotesURL).then(response => {
          this.quote = JSON.stringify(response.body).replace(/[\[\]"]/g,'');
        }, response => {
          alert("API failure")
        });
    }
  }
});