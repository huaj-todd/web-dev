import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from  "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <TodoList></TodoList>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </div>
    )
};
export default Labs;