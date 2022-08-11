import React from 'react'
import '../../App.css';
import '../../MiniLaptop.css';
import '../../Mobile.css';
import '../../Tablet.css';
function ProjectCard({ current , lastPage , nextPage, handleShow , handleCategory }) {


  return (
    <div className='p-card'>
        <div className='project-container'>
            <h1>Projects</h1>
            <div className='project-image-container'>
                <div className='project-cat'>
                    <div className='project-cat-header' >
                        <h1>categories</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(0)}>
                        <h1>all</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(4)}>
                        <h1>fullstack websites</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(2)}>
                        <h1>backend A.P.I's</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(5)}>
                        <h1>mobile apps</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(1)}>
                        <h1>static websites</h1>
                    </div>
                    <div className='project-cat-btns' onClick={() => handleCategory(3)}>
                        <h1>A.i</h1>
                    </div>
                </div>
                <div className='project-media'>
                    <div className='project-media-main'>
                        {current && current.map((data) => {
                            return (
                                <div className='project-img' key={data.id}>
                                    <img src={data.post_image} alt='' className='prj-post'/>
                                    <img src={data.inline_image} alt='' className='prj-inline' />
                                    <div className='prj-content'>
                                        <div className='prj-empty'></div>
                                        <div className='prj-details'>
                                            <div className='prj-title'>
                                                <h1>{data.title}</h1>
                                                <p >{data.description.substring(0, 75)}..</p>                                    
                                            </div>
                                            <div className='prj-view' onClick={()=>handleShow(data)}>
                                                <h1>view</h1>                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            )
                        })}
                        {current.length === 0 && <div className='project-culture'><h1>Soon loading content.</h1></div> }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard


