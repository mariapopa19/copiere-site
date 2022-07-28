import React from "react";
import Card from "./Card";

const CardList = ({ posts }) => {
    return (
        <div>
            {
                posts.map((post, i) => {
                    return (
                        <Card num={posts[i].id} />
                    );
                })
            }
        </div>
    );
}

export default CardList;