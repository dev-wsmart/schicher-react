import React from 'react';
import './PageTitle.css'

class PageTitle extends React.Component{
  render(){
    return(
      <div className="page-title">
        {this.props.pagetitle}
      </div>
    )
  }
}
  
export default PageTitle;