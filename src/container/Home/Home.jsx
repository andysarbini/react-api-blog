import React, {Component} from "react";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div>
        )
        
    }
}