import React from 'react'

const Header = () => {
  return (
    <div className='container'>
        {/* colour each letter of the word Google in a different colour */}
        <span>
            <span style={{color: '#4285F4'}}>G</span>
            <span style={{color: '#DB4437'}}>o</span>
            <span style={{color: '#F4B400'}}>o</span>
            <span style={{color: '#4285F4'}}>g</span>
            <span style={{color: '#0F9D58'}}>l</span>
            <span style={{color: '#DB4437'}}>e</span>
        </span>
    </div>
  )
}

export default Header
