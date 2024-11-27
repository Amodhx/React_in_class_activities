// import './App.css'
// import Item from "./component/Item.tsx";
//
// function App() {
//
//     const itemList = [
//         {
//             title:"AAA",
//             description:"sda"
//         },
//         {
//             title:"BBB",
//             description:"sda"
//         },
//         {
//             title:"CCC",
//             description:"sda"
//         }
//     ]
//
//   return (
//     <>
//         <Item title={itemList[0].title} description={itemList[0].description}/>
//        <Item{...itemList[0]}/>
//        <Item{...itemList[1]}/>
//        <Item{...itemList[2]}/>
//     </>
//   )
// }
//
// export default App

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

    const itemsArray = []
    for (const item of itemList) {
        itemsArray.push(
            <Item title={item.title} description={item.description} />
        );
    }


    return (
        <>
            {/*Way one*/}
            {itemList.map((item, ) => (
                <Item title={item.title} description={item.description}/>
            ))}

            {/*Way two*/}
            {itemsArray}
        </>
    )
}

export default App
