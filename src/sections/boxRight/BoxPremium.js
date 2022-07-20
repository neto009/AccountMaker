import React from 'react'

export default function BoxPremium() {
  return (
    <div>
        <div className='themebox themeboxe-premium premiumBox'>
            <div className='premiumBoxDecor'></div>
            <div className='premiumBoxBg'></div>
            <div className='premiumBoxOverlay'>
                <p className='premiumBoxOverlayText'>Become Premium!</p>
            </div>
            <div className='premiumBoxButton'>
                <form>
                    <div className='webshopButton'>
                        <div>
                            <div className='webshopButtonOver'></div>
                            <div className='webshopButtonText'></div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='premiumBoxButtonDecor'></div>
        </div>
    </div>
  )
}
