import React from 'react'

const FloorPlan = () => {
  return (
    
        <section className="destination" id="destination" style={{marginTop:"150px"}}>

<div className="heading">
    <span>Mahagun Medalleo</span>
    <h1>Floor Plan</h1>
</div>

<div className="box-container">

    <div className="box" data-aos="fade-up"  data-aos-delay="150">
        <div className="image">
            <img src="https://i.imgur.com/e0VELYm.jpg" alt="" style={{zIndex:"-5"}}/>
            <button style={{background:"red",position:"relative",zIndex:"1",height:"60px",width:"180px",bottom:"120px",left:"100px"}}>View  Platinum 3BHK  Floor Plan</button>
           
        </div>
        
    </div>

    <div className="box" data-aos="fade-up" data-aos-delay="300">
        <div className="image">
            <img src="https://i.imgur.com/e0VELYm.jpg" alt="" />
            <button style={{background:"red",position:"relative",zIndex:"1",height:"60px",width:"180px",bottom:"120px",left:"100px"}}>View Diamond 4BHK Floor Plan</button>
        </div>
      
    </div>

 


    <div className="box" data-aos="fade-up" data-aos-delay="900">
        <div className="image">
            <img src="https://i.imgur.com/xmKuj6w.jpg" alt="" />
            <button style={{background:"red",position:"relative",zIndex:"1",height:"60px",width:"180px",bottom:"120px",left:"100px",fontsize:"2px"}}>View Sapphire 4BHK Floor Plan</button>
        </div>
       
    </div>

    
  </div>

</section>





    
  )
}

export default FloorPlan