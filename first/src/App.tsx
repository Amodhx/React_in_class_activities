import './App.css'
import Item from "./component/Item.tsx";

function App() {

    const itemList = [
        {
            title:"AAA",
            description:"sda"
        },
        {
            title:"BBB",
            description:"sda"
        },
        {
            title:"CCC",
            description:"sda"
        }
    ]

  return (
    <>
        <Item title={itemList[0].title} description={itemList[0].description}/>
       <Item{...itemList[0]}/>
       <Item{...itemList[1]}/>
       <Item{...itemList[2]}/>
    </>
  )
}

export default App
