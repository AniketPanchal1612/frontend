// import React, { useState } from 'react'

// const Family = ({familyTree}) => {
//     const [isOpen,setIsOpen] = useState(false);
//     const expand = ()=>{
//         setIsOpen(!isOpen)
//     }
//   return (
//     <div style={{paddingLeft:'10px'}}>
//         <span onClick={expand}>{familyTree.name}</span>
//         {
//             isOpen ?(
//                 familyTree.children?.map((child)=>(
//                     <div style={{paddingLeft:'10px'}}>
//                         <Family familyTree={child} />
//                     </div>
//                 ))
//             ):(
//                 <></>
//             )
//         }
//     </div>
//   )
// }

// export default Family
