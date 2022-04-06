import React, { Fragment } from "react";

const GamePageInformation = ({ game }) => {
    return (
        <>
            <div className="gamePageInformation-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit dolorem fugiat eos incidunt tenetur aliquam adipisci soluta nobis
                facere deleniti?
            </div>
            <div className="gamePageInformation-genres space-between">
                <div className="gamePageInformation-genres__genre">
                    <div>Genres</div>
                    <div>
                        {game.genres.map((genre, i) => (
                            <span key={i}>{genre}</span>
                        ))}
                    </div>
                </div>
                <div className="gamePageInformation-genres__genre">
                    <div>Features</div>
                    <div>
                        <span>feature</span>
                    </div>
                </div>
            </div>

            <div className="gamePageInformation-detail">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi unde pariatur sapiente. Molestiae doloremque a reprehenderit
                    inventore tenetur atque cum. Voluptates deleniti, odio earum officiis consequuntur voluptatum autem tempora.
                </div>
            </div>
            <div className="gamePageInformation-detail">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi unde pariatur sapiente. Molestiae doloremque a reprehenderit
                    inventore tenetur atque cum. Voluptates deleniti, odio earum officiis consequuntur voluptatum autem tempora.
                </div>
            </div>
            <div className="gamePageInformation-detail">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi unde pariatur sapiente. Molestiae doloremque a reprehenderit
                    inventore tenetur atque cum. Voluptates deleniti, odio earum officiis consequuntur voluptatum autem tempora.
                </div>
            </div>
            <div className="gamePageInformation-detail">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi unde pariatur sapiente. Molestiae doloremque a reprehenderit
                    inventore tenetur atque cum. Voluptates deleniti, odio earum officiis consequuntur voluptatum autem tempora.
                </div>
            </div>
            <div className="gamePageInformation-detail">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi unde pariatur sapiente. Molestiae doloremque a reprehenderit
                    inventore tenetur atque cum. Voluptates deleniti, odio earum officiis consequuntur voluptatum autem tempora.
                </div>
            </div>
            <div className="gamePageInformation-images">
                <img src={game.posterBig} alt="" />
            </div>
            <div className="gamePageInformation-images">
                <img src={game.posterBig} alt="" />
            </div>
        </>
    );
};

export default GamePageInformation;
