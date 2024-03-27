// import React,{useEffect,} from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// const level= () => {
   
    
//     const [level, setlevel] = useState({
      
//      p_level: '',
//      p_champion: '',
//      p_runnerup: '',
//      p_performer: '',
//     });
//     const [updateSuccess, setUpdateSuccess] = useState(false);
    
  
    
  
//     const goBack = () => {
//       navigate(-1);
//     };
  
 
  
  
  
//     return (
//       <div>
//         <Header />
//       <div className="container">
     
//         <h2 className="mt-4" style={{paddingTop:'150px',marginLeft:'500px',paddingBottom:'20px'}}>Update Student</h2>
       
//         <form>
//           <div className="form-group">
//             <label>Level:</label>
//             <input type="text" className="form-control" name="p_level" value={level.p_level} />
//           </div>
//           <div className="form-group">
//             <label>Champion Limit:</label>
//             <input type="text" className="form-control" name="p_level" value={level.p_champion}  />
//           </div>
//           <div className="form-group">
//             <label>Runner Up Limit:</label>
//             <input type="text" className="form-control" name="p_level" value={level.p_runnerup} />
//           </div>
//           <div className="form-group">
//             <label>Performer Limit:</label>
//             <input type="text" className="form-control" name="p_level" value={level.p_performer}  />
//           </div>
          
         
//           <button type="button" style={{marginBottom:'10px',marginTop:'10px'}} className="btn btn-primary" >Save</button><br />
//           {updateSuccess && <p style={{ color: 'green' }}>Level updated successfully!</p>}
//           <button type="button" className="btn btn-secondary"style={{marginLeft:'1200px'}} onClick={goBack}>Back</button>
//         </form>
//       </div>
//       </div>
//     );
//   };

// export default level ;