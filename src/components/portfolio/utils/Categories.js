import React from 'react';

function Categories({filter, categories}) {
    return (
        <>

            <div className="Categories">
                {
                    categories.map((cat, i) => {
                        return <>
                            <button key={i} type={"button"} className={"btn-port"}
                                    onClick={() => filter(cat)}>{cat}</button>
                        </>
                    })
                }
            </div>

        </>
    );
}

export default Categories;