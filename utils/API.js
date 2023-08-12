'use client'

import axios from 'axios';

export default axios.create({
    baseURL: "http://44.201.100.184/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})
