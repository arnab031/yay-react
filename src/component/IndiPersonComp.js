import React from 'react';
import "./../styles/App.css";


function IndiPersonComp(props) {
    return (
        // <div>
        //     <img src={ props.image }/>
        //     <h1>{ props.name }</h1>
        //     <p className="para" id="para">{ props.email }</p>
        // </div>
        <div className='myForm'>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-sm-6">
    
                    <div class="card hovercard">
                        <div class="cardheader"></div>
                        <div class="avatar">
                            <img alt="profile image" src={ props.image }/>
                        </div>
                        <div class="info">
                            <div class="title">
                                <h1>{ props.name }</h1>
                            </div>
                            <div class="para">{ props.email }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
//////////////////////////////////////////////////////////////////////////////////////////////

    )
}

export default IndiPersonComp;

