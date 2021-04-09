import autoprefixer from 'autoprefixer';
import React from 'react'

import {getPeople, editPerson , deletePerson, addPerson} from '../DB/data'
 

export default function table(){

    const [people, setPeople]= React.useState([]);


    React.useEffect(()=>{

        setPeople(getPeople());
        console.log("people :", getPeople())

    },[])


    return(

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' , marginTop:'200px'}}>
            <head>
                    <meta charset="utf-8" />
                    <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link rel="stylesheet" />
                    <title>Tailwind</title>
                </head>
                <body>
                    <table class="shadow-lg bg-white table-auto">
                    <tr>
                        <th class="bg-blue-100 border text-left px-8 py-4">id</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">Name</th>
                        <th class="bg-blue-100 border text-left px-8 py-4">lastName</th>
                    </tr>

                    {people.map( person=>{

                        return(
                            <>
                            <tr>
                                <td class="border px-8 py-4">{person.id}</td>
                                <td class="border px-8 py-4">{person.name}</td>
                                <td class="border px-8 py-4">{person.lastName}</td>
                             
                            </tr>
                            </>

                        )            

                    })}
                    {/* <tr>
                        <td class="border px-8 py-4">
                        Alfreds Futterkiste
                        </td>
                        <td class="border px-8 py-4">Dante Sparks</td>
                        <td class="border px-8 py-4">Italy</td>
                    </tr>
                    <tr>
                        <td class="border px-8 py-4">Centro comercial Moctezuma</td>
                        <td class="border px-8 py-4">Neal Garrison</td>
                        <td class="border px-8 py-4">Spain</td>
                    </tr>
                    <tr>
                        <td class="border px-8 py-4">Ernst Handel</td>
                        <td class="border px-8 py-4">Maggie O'Neill</td>
                        <td class="border px-8 py-4">Austria</td>
                    </tr> */}
                    </table>

               
                </body>
        </div>

    )












}