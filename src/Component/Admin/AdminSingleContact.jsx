import React,{useState} from 'react'
import LeftNav from './LeftNav'
import { useParams } from 'react-router-dom'
export default function AdminSingleContact() {
    var [status,setstatus]=useState("Active")
    var { _id } = useParams()
    function deleteRecord(_id) {
        alert("Deleted " + _id)
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-light text-center p-2'>Admin Single Contact Page</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>1</td>
                            </tr>
                            <tr><th>Email id</th>
                                <td>akhileshsharmask@gmail</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Akhilesh</td>
                            </tr>
                            <tr><th>Phone</th>
                                <td>6392213248</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>This is Sample Example</td>
                            </tr>
                            <tr><th>Message</th>
                                <td>An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech.

                                    In English, both "the" and "a(n)" are articles, which combine with nouns to form noun phrases. Articles typically specify the grammatical definiteness of the noun phrase, but in many languages, they carry additional grammatical information such as gender, number, and case. Articles are part of a broader category called determiners, which also include demonstratives, possessive determiners, and quantifiers. In linguistic interlinear glossing</td>
                            </tr>                            
                            <tr>
                             <th>Date</th>
                                <td>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</td>
                            </tr>
                            <tr> <th>Status</th>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                {
                                    status === "Active" ?
                                        <th colSpan={2}><button onClick={() => setstatus('Done')}>Change Status To Done</button></th> :
                                        <th colSpan={2}><button onClick={() => setstatus('Done')}>Delete</button></th>
                              }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
