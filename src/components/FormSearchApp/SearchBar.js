import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = (props) => {
  return (
<>
<form id="dogsNames" onSubmit={props.onSubmitHendler}>
  <div className="logo">
<img src="/images/dogCover.png"/>
<h3>Dog Search</h3>
  </div>
  <div className="ui icon input">
    <input
      type="list"
      placeholder="Search..."
      onChange={props.hendlerChange}
      value={props.InputVal}
      name="InputVal"
      autoComplete="off"
    />

  <i onClick={props.onSubmitHendler} className="inverted circular search link icon" title="Click for search"></i>

</div>
</form>

</>
  )
}

export default SearchBar
