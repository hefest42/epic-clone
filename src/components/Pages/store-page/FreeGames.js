import React from "react";

const FreeGames = ({ firstGame, secondGame }) => {
    return (
        <section>
            <div>
                <div>Free Games</div>
                <button>VIEW MORE</button>
            </div>

            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>Free Now</div>
                    </div>
                    <div>
                        <h5>Relicta</h5>
                        <p>Free Now - Jan 27 at 05:00 PM</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src="" alt="" />
                        <div>COMING SOON</div>
                    </div>
                    <div>
                        <h5>DAEMON X MACHINA</h5>
                        <p>Free Jan 27 - Feb 03</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeGames;
