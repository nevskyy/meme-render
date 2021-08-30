import React from 'react';

export class MemeGenerator extends React.Component{
  state = {
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
    allMemeImgs: []
  }

  componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => this.setState({
        allMemeImgs: response.data.memes,
      }))
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  submitForm = (event) => {
    event.preventDefault();

    const randImg = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url;
    console.log(randImg)

    this.setState({
      randomImg: randImg,
    })
  }

  render() {
    const {topText, bottomText, randomImg} = this.state;
    return(
      <div className="form">
        <form className="meme-form" onSubmit={this.submitForm}>
          <input 
            type="text"
            name="topText"
            placeholder="Enter Top text" 
            value={topText}
            onChange={this.handleChange}
          />
          <input 
            type="text"
            name="bottomText"
            placeholder="Enter Bottom text" 
            value={bottomText}
            onChange={this.handleChange} 
          />
          <button>
            Random Img
          </button>
        </form>
        <div className="meme">
          <img src={randomImg} alt="" />
          <h2 className="top">{topText}</h2>
          <h2 className="bottom">{bottomText}</h2>
        </div>
      </div>
    )
  }
}