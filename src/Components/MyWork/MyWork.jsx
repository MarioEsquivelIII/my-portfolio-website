import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='mywork'>
        <div className='mywork-title'>
            <h1>Projects</h1>
        </div>

        <div className='mywork-container'>
            {mywork_data.map((work,index)=>{
                return(
                  <div className="card">
                    <img className="card-img-top" key={index} src={work.w_img} alt=''/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
                ) 
            })}
        </div>
    </div>
  )
}

export default MyWork