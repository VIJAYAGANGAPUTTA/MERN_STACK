import logo from './logo.svg';
import '.App.css';
import Button from '@material-ui/core/Button'
function app(){
  return(
    <div classname='App'>
      <div classname='App-button'>
        <Button variant="outlined">CSE</Button>
        <Button variant="outlined">ECE</Button> 
        <Button variant="outlined">BT</Button>
        <Button variant="outlined">ME</Button>
        
      </div>
      <div classname='App-img'>
        <img src="C:\Users\P.VIJAYA GANGA\Downloads\fullstack open 2022\Part2\countries\public\assets\assets\CSE-BLOCK.jpg" style={{width:"600px",height:"400px"}}/>
      </div>
      <div classname='App-title'>
        <h4> { computerscience department}</h4>
      </div>
    </div>
  )
}