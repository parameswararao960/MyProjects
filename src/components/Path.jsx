import React, { useEffect, useState } from 'react'

const Path = () => {

    const mainGrid = [[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
                    [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
                    [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
                    [0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0],
                    [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    const [grid, setGrid] = useState(mainGrid);
    
    const [sourceState, setSouceState] = useState(false);
    const [source, setSource] = useState([0, 0])
    
    let temp = []
    for (let i of grid){
        temp.push(i.slice())
    }


    const destination = (a1, a2) => {
        temp[a1][a2] = 3
    }

    let vis = [];

    const isThere = (a1, a2) => {
        for (let i of vis){
            if (i[0] === a1 && i[1] === a2){
                return true
            }
        }
        return false
    }

    const pathFind = (temp, i, j) => {
        if (i < 0 || j < 0 || i > temp.length - 1 || j > temp[0].length - 1 || temp[i][j] === 0 || isThere(i, j)){
            return false
        }
        else{
            vis.push([i, j])
            if (temp[i][j] === 3) {
                return true
            }
            if (!isThere(i - 1, j)){
                if (pathFind(temp, i - 1, j)) {
                    if (temp[i][j] === 2) {
                        return true
                    }
                    temp[i][j] = 4
                    return true
                }
            }
            if (!isThere(i + 1, j)){
                if (pathFind(temp, i + 1, j)) {
                    if (temp[i][j] === 2) {
                        return true
                    }
                    temp[i][j] = 4
                    return true
                }
            }
            if (!isThere(i, j - 1)){
                if (pathFind(temp, i, j - 1)) {
                    if (temp[i][j] === 2) {
                        return true
                    }
                    temp[i][j] = 4
                    return true
                }
            }
            if (!isThere(i, j + 1)){
                if (pathFind(temp, i, j + 1)) {
                    if (temp[i][j] === 2) {
                        return true
                    }
                    temp[i][j] = 4
                    return true
                }
            }
        }
    }

    const handleAll = (a1, a2) => {
        if (!sourceState){
            setSouceState(true)
            setSource([a1, a2])
            temp[a1][a2] = 2
            const t = grid[a1].slice(0,a2).concat(2).concat(grid[a1].slice(a2+1))
            setGrid([...grid.slice(0,a1), t, ...grid.slice(a1+1)])  
        }
        else {
            mainGrid[source[0]][source[1]] = 2
            setGrid(mainGrid)
            temp = []
            for (let i of mainGrid){
                temp.push(i.slice())
            }
            vis = []
            temp[a1][a2] = 3
            pathFind(temp, source[0], source[1])
            setGrid(temp)
        }
    }

    return (
        <div className='grid'>
            {grid.map((row, i)=> {
                return(
                    row.map((ele, j)=> {
                        return(<div style={{width: `${ele === 4 ? '10px' : '20px'}`, height: `${ele === 4 ? '10px' : '20px'}`, backgroundColor: `${ele === 1 ? 'white' : ele === 4 ? 'blue' : ele === 2 ? 'green' : ele === 3 ? 'orange' : 'black'}`, margin: `${ele === 4 ?'5px auto 0 auto': 0}`}} key={j} onClick={() => handleAll(i, j)}></div>)
                    })
                )
            })}
        </div>
    )
}

export default Path
