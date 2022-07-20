import React from 'react'

export default function BoxSocial() {
  return (
    <div className='box'>
        <div className='corner-tl'></div>
        <div className='corner-tr'></div>
        <div className='border_1'></div>
        <div className='borderTitleText'>
            <div className='infoBar'>
                <a className='infoBarBlock' href='https://www.twitch.tv/directory/game/Tibia'>
                  <img className='infoBarBigLogo' src='/img/icon/icon-twitch.png' alt='Twitch Icon'/>
                </a>
                <a className='infoBarBlock' href='https://www.youtube.com/channel/UCg5vFOB3tN8KGcJDyk6QQzQ/home'>
                  <img className='infoBarBigLogo' src='/img/icon/icon-youtube.png' alt='Youtube Icon'/>
                </a>
                <a className='infoBarBlock' href='https://booyah.live/games/10019'>
                  <img className='infoBarBigLogo' src='/img/icon/icon-booyah.png' alt='Booyah Icon'/>
                </a>
                <a className='infoBarOnlinePlayers' href='/#'>
                  <img className='infoBarBigLogo' src='/img/icon/icon-players-online.png' alt='Players Icon'/>
                  <span className='infoBarNumbers'>
                    <span className='infoBarSmallElement'>0 Players Online</span>
                  </span>
                </a>
            </div>
        </div>
        <div className='border_1'></div>
        <div className='cornerWrapper-b'>
            <div className='corner-bl'></div>
        </div>
        <div className='cornerWrapper-b'>
            <div className='corner-br'></div>
        </div>
    </div>
  )
}
