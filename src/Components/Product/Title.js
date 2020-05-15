import React from 'react';


export default function Title({name, title}) {
    return (
        <div>
            <div className="container">

                <div className="row">
                    <div className="col-10 mx-auto my-2 text-center ">
                        <h1 className="text-capitalise font-weight">
                            {name} <strong className="text-blue">{title}</strong>
                        </h1>
                    </div>
                </div>


            </div>
        </div>
    )
}
