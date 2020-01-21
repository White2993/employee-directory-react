import React, { useState, useEffect } from "react";
import friends from "../../friends.json";
import Container from "../Container/index";
import TableHead from "../TableHead/index";
import compare from "../Functions/compare";
import compareLocation from "../Functions/compareLocation";
import compareOccupation from "../Functions/compareOccupation";
import compareId from "../Functions/compareId"
import CardBtn from "../CardBtn/index"

export default function Employee() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employeeOccupation, setEmployeeOccupation] = useState('');
    const [employeeLocation, setEmployeeLocation] = useState('');
    const [employeeColor, setEmployeeColor] = useState('');

    function setEmployeeInfo(value) {
        setEmployeeName(value.map(o => <p key={o.id}>{o.name}</p>))
        setEmployeeId(value.map(o => <p key={o.id}>{o.id}</p>))
        setEmployeeOccupation(value.map(o => <p key={o.id}>{o.occupation}</p>))
        setEmployeeLocation(value.map(o => <p key={o.id}>{o.location}</p>))
        setEmployeeColor(value.map(o => <p key={o.id}>{o.color}</p>))
    }

    useEffect(() => {
        setEmployeeInfo(friends);
      }, []);

    function loadAllEmployee() {
        setEmployeeInfo(friends);
    }

    function filterByColor(value) {
        let selectedColor = friends.filter(o => o.color === value);
        setEmployeeInfo(selectedColor);
    }

    function sortById() {
        let newListId = friends.sort(compareId);
        setEmployeeInfo(newListId);
     }
 
    function sortByName() {
       let newListName = friends.sort(compare);
       setEmployeeInfo(newListName);
    }

    function sortByLocation() {
        let newListLocation = friends.sort(compareLocation);
        setEmployeeInfo(newListLocation);
    }

    function sortByOccupation() {
        let newListOccupation = friends.sort(compareOccupation);
        setEmployeeInfo(newListOccupation);
    }

    return (
        <div>
            <Container>
            <h1 className="title">Employee Directory</h1>
            <CardBtn className="btn btn-warning" onClick={e => sortById()}> Sort By ID </CardBtn>
            <CardBtn className="btn btn-warning" onClick={e => sortByName()}> Sort By Name </CardBtn>
            <CardBtn className="btn btn-warning" onClick={e => sortByOccupation()}> Sort By Occupation </CardBtn>
            <CardBtn className="btn btn-warning" onClick={e => sortByLocation()}> Sort By Location </CardBtn>
            <CardBtn className="btn btn-info" onClick={e => loadAllEmployee()}> Show All </CardBtn>
            <CardBtn className="btn btn-danger" onClick={e => filterByColor("red")}> Filter Red </CardBtn>
            <CardBtn className="btn btn-primary" onClick={e => filterByColor("blue")}> Filter Blue </CardBtn>
            <CardBtn className="btn btn-success" onClick={e => filterByColor("green")}> Filter Green </CardBtn>
            <table className="table table-dark table-bordered">
            <TableHead />
            <tbody>
                <tr>
                    <th scope="col" key={employeeId}>{employeeId}</th>
                    <th scope="col">{employeeName}</th>
                    <th scope="col">{employeeOccupation}</th>
                    <th scope="col">{employeeLocation}</th>
                    <th scope="col">{employeeColor}</th>
                </tr>
            </tbody>
            </table>
            </Container>
        </div>
    );
}