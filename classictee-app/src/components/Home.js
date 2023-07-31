import React from "react";

function Home() {

    return (
        <div id="home">
            <div className="home-image">
                <img src="{home-image}" alt='' />
            </div>
            <div className="home-text">
                <h1>Classic Tee</h1>
                <h2>$75.oo</h2>
                <p>Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba sunt. Quod autem ratione actum est, id officium appellamus </p>
                <h3>size* S</h3>
                <div className="button-group">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                </div>
                <div className="cart">
                    <button>ADD TO CART</button>
                </div>
            </div>

        </div>

    )

}
export default Home;
