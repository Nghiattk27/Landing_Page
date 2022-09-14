import React from 'react'

function IconSocialMedia({ icon }) {
    return (
        <div className='d-flex justify-content-center align-items-center rounded-circle me-2 mt-4'
            style={{
                width: "40px",
                height: "40px",
                background: "#EEF1F2",
            }}>
            <i className={icon}
                style={{
                    fontSize: "15px",
                    color: "#5A7184",
                }}></i>
        </div>
    )
}

export default IconSocialMedia