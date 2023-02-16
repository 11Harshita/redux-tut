import React from 'react'
const User=(props)=>{
    console.warn(props.data.title);
    const {data}=props
    return(
        <div>
            <h1>User Component</h1>
            <h4>{data.title}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}

export default User;