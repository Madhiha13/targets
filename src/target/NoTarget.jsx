import {useCallback ,useState} from "react";
import PropTypes from "prop-types";
import {AddIcon,userIcon,vector1,vector2,vector3,LeftArrow,whiteVariationSvg,DataManagement1,DataManagement2,DataManagement3,DataManagement4,DataManagement5,Group1} from "./../assets"
import PopUp from "./SubComponent/PopUp"
const NoTarget = ({ className = "" }) => {
    const [selectedYear, setSelectedYear] = useState(''); 
    const [isPopupOpen, setIsPopupOpen] = useState(false);
   

    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
         '2017-2018',

      ];

      
      const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };
   
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);
      }
  const onDataManagement1IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 17" to the project
  }, []);

  const onDataManagement4IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 21" to the project
  }, []);

  const onDataManagement2IconClick = useCallback(() => {
    // Please sync "Plugin / file cover - 20" to the project
  }, []);

  const onDataManagement3IconClick = useCallback(() => {
    // Please sync "Emission Measurement - Home Page" to the project
  }, []);

  return (
    <div className={`targets-page-no-target ${className}`}>
      <div className="targets-page-no-target-child" />
      <img
        className="white-variation-1"
        alt=""
        src={whiteVariationSvg}
      />
      <img className="user-5-1" alt="" src={userIcon}/>
      <img
        className="data-management-1-icon"
        alt=""
        src={DataManagement1}
        onClick={onDataManagement1IconClick}
      />
      <img
        className="data-management-4-icon"
        alt=""
        src={DataManagement4}
        onClick={onDataManagement4IconClick}
      />
      <img
        className="data-management-2-icon"
        alt=""
        src={DataManagement2}
        onClick={onDataManagement2IconClick}
      />
      <div className="co2-parent">
        {/* <div className="co2">CO2</div> */}
        <img className="co2" alt="" src={Group1}/>
      </div>
      <img
        className="data-management-3-icon"
        alt=""
        src={DataManagement3}
        onClick={onDataManagement3IconClick}
      />
      <img
        className="left-arrow-in-circular-button-icon"
        alt=""
        src={LeftArrow}
      />
      <div className="targets-page-no-target-item" />
      <b className="targets">TARGETS</b>
      <div className="targets-page-no-target-inner" onClick={openPopup}/>
      <b className="set-target">SET TARGET</b>
      <img className="add-4-icon" alt="" src={AddIcon}/>
      <div className="rectangle-div" />
      <img
        className="data-management-5-icon"
        alt=""
        src={DataManagement5}
      />
      <b className="base-year">BASE YEAR</b>
      <b className="target-year">TARGET YEAR</b>
      <b className="coverage">COVERAGE</b>
      <b className="type-of-target">TYPE OF TARGET</b>
      <b className="reductions">% REDUCTIONS</b>
      <b className="target-emissions">TARGET EMISSIONS</b>
      <b className="base-emissions">BASE EMISSIONS</b>
      <img className="vector-icon" alt="" src={vector1} />
      <img
        className="targets-page-no-target-child1"
        alt=""
        src={vector2}
      />
      <img
        className="targets-page-no-target-child2"
        alt=""
        src={vector3}
      />
      <div className="ellipse-div" />
      <div className="targets-page-no-target-child3" />
      <div className="targets-page-no-target-child4" />
      <div className="white-variation-2" />
      <div className="dropdown-box">
        <div className="">
          <div className="menu-label">
          <div className="menu-label1">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>
                            
                          </div>
          </div>
        </div>
        
      </div>
      <div className="reporting-year">Reporting Year</div>
      
      <PopUp className={isPopupOpen ? 'open' : 'closed'} onClose={closePopup} />
    </div>
  );
};

NoTarget.propTypes = {
  className: PropTypes.string,
};

export default NoTarget;
