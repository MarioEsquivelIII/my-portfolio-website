import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'

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
                    <img className="card-img-top" key={index} src={work.img} alt=''/>
  <div className="card-body">
    <h5 className="card-title">{work.name}</h5>
  </div>
  <div className="card-buttons">
  <a href={work.github} target="_blank" rel="noopener noreferrer" className="card-button">GitHub</a>
  <a href={work.demo} target="_blank" rel="noopener noreferrer" className="card-button">Live Demo</a>
</div>
</div>
                ) 
            })}
        </div>
    </div>
  )
}

export default MyWork