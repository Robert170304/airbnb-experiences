import React from 'react'

export default function Navbar() {

    const [boolVal, setBoolVal] = React.useState(false)
    
    function handleMenu(e) {
        e.preventDefault()
        setBoolVal((oldVal) => {
            return !oldVal
        })
        // console.log(boolVal)
    }

    // const liBtns = document.querySelectorAll('.li-action')

    // {boolVal && liBtns.forEach((btn) => {
    //     btn.addEventListener('click', function(e) {
    //         console.log(boolVal, e.target.textContent)
    //     })
    // })}

    return (
        <div className='navbar'>
            <nav>
                <img src='./Airbnb_Logo.webp'/>
                <div className='menuBtn' onClick={handleMenu}>
                    <span className="material-symbols-outlined">menu</span>
                    <span className="material-symbols-outlined">account_circle</span>
                </div>
            </nav>
            {boolVal && <div className='menu-modal'>
                <ul>
                    <li className='li-hover li-action'>Sign up</li>
                    <li className='li-hover li-action'>Log in</li>
                    <li><hr/></li>
                    <li className='li-hover li-action'>Host your home</li>
                    <li className='li-hover li-action'>Host an experience</li>
                    <li className='li-hover li-action'>Help</li>
                </ul>
            </div>}
        </div>
    )
}