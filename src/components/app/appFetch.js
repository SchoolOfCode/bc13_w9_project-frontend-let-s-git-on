import { useState }  from 'react'
import {setQandA } from './App.js'


async function getQandA () {
    
    const response = await fetch('http://localhost:3000/api/questions')
    let unpackedJson = await response.json();
    console.log (`FetchedDB:`, unpackedJson)
   return unpackedJson.payload

}

export default getQandA