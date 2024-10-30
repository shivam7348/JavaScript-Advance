import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';


function App() {
  const response = [
    {
      itemName : 'Nirma',
      itemDate : '20/06/1997',
      itemMonth: 'June',
      itemYear : '1997'

    },
    {
      itemName : 'Nirma2',
      itemDate : '22/45654/3234',
      itemMonth: 'may',
      itemYear : '1999'
    },
    {
      itemName : 'Nirma3',
      itemDate : '20/09/2002',
      itemMonth: 'september',
      itemYear : '2002'
    }
  ] 

  return (
    <div>
      <Item name = {response[0].itemName}></Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}/>

      <Item name =  {response[1].itemName}/>
      <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}/>1
      <Item name =  {response[2].itemName}/>
      <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}/>
      <div className='App'> Hello Jessica</div>
      
    </div>
  );
}

export default App;
