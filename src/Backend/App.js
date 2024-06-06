const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Mock data
let targetData = [];

// Endpoint to get all data
app.get('/api/data', (req, res) => {
  res.json({
    targetTypes: ['type1', 'type2', 'type3', 'type4', 'type5', 'type6'],
    targetYears: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"],
    baseYears: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]
  });
});

// Endpoint to receive target data (POST request)
app.post('/api/target-data', (req, res) => {
  const newData = req.body;
  targetData.push(newData);
  res.json({ message: 'Target data received successfully', data: newData });
});
// Endpoint to get target data
app.get('/api/target-data', (req, res) => {
    res.json(targetData.map(data => ({
      targetType: data.targetType,
      targetYear: data.targetYear,
      baseYear: data.baseYear,
      scope1Emissions: data.scope1Emissions,
      scope2Emissions: data.scope2Emissions,
      reductionPercentage: data.reductionPercentage,
    })));
  });
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
