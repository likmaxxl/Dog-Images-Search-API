import React from 'react'
import PropTypes from 'prop-types'

const ImagesList = (props) => {
  return (
  <>

    <div className="imgSearch">
{
  props.succsess === "success" ? (

      <img src={props.dogsData} />

  ) : (
    <h1>{props.succsess === "error" && 'Please enter the correct name..'}</h1>
  )
}

{
props.loading ? (
  <div className="ui active dimmer">
    <div className="ui text loader">Loading</div>
  </div>
) : (
""
)
}
</div>
  </>
  )
}

export default ImagesList
