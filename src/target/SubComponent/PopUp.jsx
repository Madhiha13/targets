import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AddIcon, Image ,CloseIcon} from "../../assets";

const PopUp = ({ className = "" ,onClose}) => {
    const [targetTypes, setTargetTypes] = useState([]);
  const [targetYears, setTargetYears] = useState([]);
  const [baseYears, setBaseYears] = useState([]);


  const [selectedTargetType, setSelectedTargetType] = useState('');
  const [selectedTargetYear, setSelectedTargetYear] = useState('');
  const [selectedBaseYear, setSelectedBaseYear] = useState('');
  const [scope1Emissions, setScope1Emissions] = useState('');
  const [scope2Emissions, setScope2Emissions] = useState('');
  const [reductionPercentage, setReductionPercentage] = useState('');
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const data = await response.json();
      setTargetTypes(data.targetTypes);
      setTargetYears(data.targetYears);
      setBaseYears(data.baseYears);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async () => {
    const targetData = {
      targetType: selectedTargetType,
      targetYear: selectedTargetYear,
      baseYear: selectedBaseYear,
      scope1Emissions: scope1Emissions, 
      scope2Emissions: scope2Emissions, 
      reductionPercentage: reductionPercentage, 
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/target-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(targetData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Data submitted:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

 
  return (
    <div className={`set-target-popup ${className}`}>
      <div className="set-target-popup-child" />
      <img
        className="firefly-generate-an-image-of-s"
        alt=""
        src={Image}
      />
       <b className="targets_popUp">TARGETS</b>


      <div className="select-target-type">Select Target Type</div>

      <div className="select-base-year">Select Base Year</div>
      <div className="select-target-year">Select Target Year</div>
      <div className="reduction-from-base">% Reduction from base year</div>
      <div className="scope-1-emissions">Scope 1 Emissions (MTCO2e)</div>
      <div className="set-target-popup-item" />
      <div className="mtco2e">MTCO2e</div>
      
      <div className="scope-2-emissions">Scope 2 Emissions (MTCO2e)</div>

      <div className="set-target-popup-child1" onClick={handleSubmit}/>
      <b className="set-target-1">SET TARGET</b>
      <img className="add-4-icon_" alt="" src={AddIcon}/>
      
      <div className=""> 
      <input className="set-target-popup-item" placeholder="MTCO2e" type="text"value={scope1Emissions} 
  onChange={(e) => setScope1Emissions(e.target.value)}/>
      </div>

       <div className="">
       <input className="rectangle-div-mtco2e" placeholder="MTCO2e" type="text" value={scope2Emissions} 
  onChange={(e) => setScope2Emissions(e.target.value)}/>
   </div>
   
   <div className="" >
   <input className="set-target-popup-inner" placeholder="Enter reduction %" type="text" value={reductionPercentage} 
  onChange={(e) => setReductionPercentage(e.target.value)}/>

   </div>
      

     
      <div className="dropdown-box0">
        <div className="">
          
          <div className="menu-label">
          <select id="targetYear" className="header0" value={selectedTargetYear} onChange={(e) => setSelectedTargetYear(e.target.value)}>
          <option value="">Select Target Year</option>
          {targetYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
            
          
          </div>
          
        </div>
        
      </div>

      
      <div className="dropdown-box1">
        <div className="">
          
          <div className="menu-label">
          <select id="baseYear" className="header0" value={selectedBaseYear} onChange={(e) => setSelectedBaseYear(e.target.value)}>
          <option value="">Select Base Year</option>
          {baseYears.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
          </div> 
        </div>   
      </div>
      <div className="dropdown-box2">
        <div className="">
        <select id="targetType" className="header0" value={selectedTargetType} onChange={(e) => setSelectedTargetType(e.target.value)}>
          <option value="">Select Target Type</option>
          {targetTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        </div>

      </div>
     
      <img className="close-icon" alt="Close" src={CloseIcon} onClick={onClose} />
    </div>
  );
};
PopUp.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default PopUp;
