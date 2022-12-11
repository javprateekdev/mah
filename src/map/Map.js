import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const map = () => {
  return (
    <section className="destination" id="destination" >

    <div className="heading">
        <span>Mahagun Medalleo</span>
        <h1>Location Advantage</h1>
    </div>
    
    <div className="box-container">
    
        <div className="box" data-aos="fade-up"  data-aos-delay="150">
            <div className="image" style={{height:"300px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.746661802073!2d77.37331051440513!3d28.547333494684235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce505caa7abb9%3A0xcd4c63bb8252dd44!2sMAHAGUN%20MEDALLEO%20SECTOR%20107%20NOIDA!5e0!3m2!1sen!2sin!4v1670062403686!5m2!1sen!2sin" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
            </div>
            <div className="box" data-aos="fade-up"  data-aos-delay="150">
            <div className="image" style={{height:"300px",background:"white"}}>  
           <h3 style={{fontSize:"22px"}}> The perfect location for a Luxurious family environment  </h3>    
 <div style={{fontSize:"20px",marginTop:"5px",width:"350px"}}><LocationOnIcon/>Silvertone School-1 km </div>
 <div style={{fontSize:"20px",marginTop:"5px",width:"350px"}}><LocationOnIcon/>Starling Edge Mall-1 km </div>
 <div style={{fontSize:"20px",marginTop:"5px",width:"350px"}}><LocationOnIcon/> Shanti Hospital-3.6 km</div>
 <div style={{fontSize:"20px",marginTop:"5px",width:"350px"}}><LocationOnIcon/>Amity University-6 km </div>
 <div style={{fontSize:"20px",marginTop:"5px",width:"350px"}}><LocationOnIcon/> Golf Course Station-6 km</div>
 <div style={{fontSize:"20px",marginTop:"5px",width:"450px"}}><LocationOnIcon/>Yatharth Super Speciality Hospital-3.3 km  </div>
 

  </div>
  </div>
        </div>
    
       
        
    
     
    
    
    
    
        
    
    
    </section>
  )
}

export default map