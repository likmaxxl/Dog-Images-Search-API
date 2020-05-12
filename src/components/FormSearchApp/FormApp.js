import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './SearchBar'
import ImagesList from './ImagesList'
import allNames  from './NameOfDogs'
import './FormDogs.css'

class FormApp extends React.Component {
  state={
    InputVal:"bullterrier",
    dogsData:[],
    succsess:[],
    allNamesDog:allNames,
    loading:false
  }

hendlerChange = (e) => {
  const { value, name } = e.target;
  this.setState({
    [name]: value,
  });
};



//submit on enter and on click
onSubmitHendler = (e) => {
  e.preventDefault();
  fetch(`https://dog.ceo/api/breed/${this.state.InputVal}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        dogsData: data.message,
        succsess: data.status,
      });
    });
};



//click on name of dog
nameClick=(name)=>{
  let clickedEl=name.target.innerText
this.setState({
  InputVal:clickedEl.trim(),
})
}


componentDidMount(){
  this.setState({
  loading:true

})
  fetch(`https://dog.ceo/api/breed/${this.state.InputVal}/images`)
  .then(response=>response.json())
  .then(data=>{
    this.setState({
      succsess: data.status,
      loading:false,
      dogsData: data.message[0]

  })
  })

}

  render () {

  return(
<>
  <div className="ui container">
    <div className="content">
      <div className="dogsName">
        <h1>Enter one of the names</h1>
        {this.state.allNamesDog.map((all, index) => {
          return (
            <span key={index} onClick={(name) => this.nameClick(name)}>
              {all}{" "}
            </span>
          );
        })}
      </div>
      <SearchBar
        hendlerChange={this.hendlerChange}
        InputVal={this.state.InputVal}
        onSubmitHendler={this.onSubmitHendler}
      />

      <ImagesList
        dogsData={this.state.dogsData}
        succsess={this.state.succsess}
        loading={this.state.loading}
      />
    </div>
  </div>
</>

  )
  }
}

export default FormApp;
