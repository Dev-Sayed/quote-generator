import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {quote: "", author: ""};
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }
  handleClick() {
    const quoteText = document.getElementById('quote');
    let myFetchFunc = async () => {
      let resp = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      let dataObj = await resp.json();
      let quotes = dataObj.quotes;
      let randomNum = Math.ceil(Math.random() * 100);
      let quote = quotes[randomNum].quote;
      let author = quotes[randomNum].author;
      this.setState({
        quote: quote,
        author: author
      });
      if (quote.length > 120) {
        quoteText.classList.add('long-quote');
      } else {
        quoteText.classList.remove('long-quote');
      }
    }
    myFetchFunc();
  }
  componentDidMount() {
    this.handleClick();
  }
  handleClick2() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quote} - ${this.state.author}`;
    window.open(twitterUrl, '_blank');
  }
  render() {
    return (
      <div className="container">
        <div className="quote-container" id="quote-container">
          <div className="quote-text">
              <i className="fas fa-quote-left"></i>
              <span id="quote">{this.state.quote}</span>
          </div>
          <div className="quote-author">
              <span id="author">{this.state.author}</span>
          </div>
          <div className="button-container">
              <button onClick={this.handleClick2} className="twitter-button" id="twitter" title="Tweet This!">
                  <i className="fab fa-twitter"></i>
              </button>
              <button onClick={this.handleClick} id="new-quote">New Quote</button>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;