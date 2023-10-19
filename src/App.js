import * as React from 'react';
import './App.css';

function App() {
  const [age, setAge] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [totalWater, setTotalWater] = React.useState(0);
  
  const handleChangeAge=(e)=>{
    setAge(e.target.value);
  }

  const handleChangeWeight=(e)=>{
    setWeight(e.target.value);
  }


  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  React.useEffect(() => {
    document.body.style.background = '#000';
    document.body.style.color = '#fff';
    if (age === 0) return;
    if (weight === 0) return;

    if (age > 0 && age <= 17){
      setTotalWater(weight*40);
    }
    if (age > 17 && age <= 55){
      setTotalWater(weight*35);
    }
    if (age > 55 && age <= 65){
      setTotalWater(weight*30);
    }
    if (age >= 66){
      setTotalWater(weight*25);
    }
  }, [age, weight])

  return (
    <div className="App">
      <div style={{width:'300px', height:'50px', position:'absolute', top:'40%', left:'45%',margin:'-25px 0 0 -25px'}}>
         <form>
             <input className='input3' placeholder="Idade" type="text" id="age" onChange={handleChangeAge} name="age" /><br />
             <input className='input3' placeholder="Peso" type="text" id="weight" onChange={handleChangeWeight} name="weight" />
         </form>
         <p>Total de água a ser tomada por dia: <b>{formatNumber(totalWater)}</b></p>
      </div>
    </div>
  );
}

export default App;
