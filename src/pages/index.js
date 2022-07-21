import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => {
    return (
        <div style={{ color: `purple` }}>
            <Link to="/contact/">Contact Us</Link>
            <Header headerText={`Hello Gastby!`} />
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    );
}
