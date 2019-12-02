import React from 'react';

export default class Comments extends React.Component {
    render() {
        return (
        <div style={{marginBottom:'2%', textAlign:'left', marginLeft:'2%'}}>
            <h2>Comments</h2>
            <input type="text" value="Your comment.." name="comment" size="90"/>
        </div>
        )
    }
};