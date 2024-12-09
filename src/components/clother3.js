import React from "react";

const test3 = () => {
  return  <b>Kích cỡ Test 65156:</b>  
}
function Profile() {
  return <b>Kích cỡ Test4 88:</b> ;
}

const Clothes = (props) => {
  console.log(props) //Giá trị của props
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>
          <li><b>Tên:</b> {props.name}</li>
          <li><b>Loại:</b> {props.type}</li>
          <li><b>Màu:</b>  {props.color}</li>
          <li><b>Kích cỡ:</b>  {props.size}</li> 
           <li>{test3()} </li>  
           <li><Profile/> </li>
         
      </ul>
      <hr></hr>
    </div>
  );
};
export default Clothes;