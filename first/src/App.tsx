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

// import './App.css'
// import {ReactElement} from "react";
// import DashBoard from "./component_two/DashBoard.tsx";
// import LoginComponent from "./component_two/LoginComponent.tsx";
//
// function App() {
//
//     const isLoggedIn :boolean = true;
//     let content:ReactElement;
//
//     if (isLoggedIn) {
//         content = <DashBoard/>
//     }else {
//         content = <LoginComponent/>
//     }
//     return (
//         <>
//             {content}
//         </>
//     )
// }
//
// export default App


// import './App.css'
// import Subject from "./component/Subject.tsx";
//
// function App() {
//
//     return (
//         <>
//             <Subject name = "RAD">Lorem</Subject>
//             <Subject name="MAD">Lorem</Subject>
//         </>
//     )
// }
//
// export default App


import './App.css'
import Case from "./component_three/Case.tsx";
import {useState} from "react";


function App() {

    const [content, setContent] = useState("0");

    function handleClick(num:number) {
        setContent(String(++num));
    }

    return (
        <>
            <Case content={content} function={handleClick}></Case>
        </>
    )
}

export default App

