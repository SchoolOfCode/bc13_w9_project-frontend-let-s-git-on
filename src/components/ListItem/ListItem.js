import React from 'react';

export default function ListItem({questions, choices}){
   return ( <ul>
        <li>{questions} <strong>{choices}</strong></li>
    </ul>)
}