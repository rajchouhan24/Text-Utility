import React from 'react'

export default function Alert(props) {
    const capit = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
         
        props.alert &&  <div className="alert mt-md-5 fixed-top alert-warning alert-dismissible fade show" role="alert">
                <strong>{capit(props.alert.typ)}</strong>{props.alert.msg}
                
            </div>
         
    )
}
