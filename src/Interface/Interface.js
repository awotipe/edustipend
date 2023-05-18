import React from 'react'
import classes from './Interface.module.css'


const Interface = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div className={classes.header}>
            <div className={classes.empty}>
              </div>
              <div className={classes.innerHeader}>
                <p>Contact us</p>
                <button>Signup</button>
                </div>
            </div>
            <div className={classes.content}>
            <div className={classes.text}>
                <h1>Make your party fun!</h1>
                <p>Create your own custom playlist today</p>
                <button>Create Playlist</button>
            </div>
            <div className={classes.btn}>
                <h5>Trending songs</h5>
                <button>Unavailable by <em>Davido</em> +</button>
                <button>Unavailable by <em>Davido</em> +</button>
                <button>Unavailable by <em>Davido</em> +</button>
                <button>Unavailable by <em>Davido</em> +</button>
                <button>Unavailable by <em>Davido</em> +</button>
                <div className={classes.downBtn}><button>View more</button></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Interface