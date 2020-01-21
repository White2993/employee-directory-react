import React, { useState, useEffect } from "react";
import { compare, compareId, compareLocation, compareOccupation} from "../Functions/compare";
import friends from "../../friends.json";
import Container from "../Container/index";
import TableHead from "../TableHead/index";
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
            <table className="table table-striped table-sm">
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
            
            <div class='btn-group btn-group-sm'>
              <CardBtn className="btn btn-success" onClick={e => sortByName()}> Sort By Name </CardBtn>
              <CardBtn className="btn btn-primary" onClick={e => sortById()}> Sort By ID </CardBtn>
              <CardBtn className="btn btn-success" onClick={e => sortByOccupation()}> Sort By Occupation </CardBtn>
              <CardBtn className="btn btn-primary" onClick={e => sortByLocation()}> Sort By Location </CardBtn>
              <CardBtn className="btn btn-success" onClick={e => filterByColor("red")}> Filter Red </CardBtn>
              <CardBtn className="btn btn-primary" onClick={e => filterByColor("blue")}> Filter Blue </CardBtn>
              <CardBtn className="btn btn-success" onClick={e => filterByColor("green")}> Filter Green </CardBtn>
            </div>
            
            </Container>
        </div>
    );
}