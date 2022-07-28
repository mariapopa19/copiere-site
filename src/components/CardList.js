import React from "react";
import Card from "./Card";

const CardList = ({ posts }) => {
    return (
        <div>
            {
                posts.map((i) => {
                    return (
                        <Card num={posts[i].url} />
                    );
                })
            }
        </div>
    );
}

export default CardList;