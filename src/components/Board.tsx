import { useEffect, useState } from "react";

function Board() {
  const [boardArr, setBoardArr] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (
      boardArr[0][0] === "X" &&
      boardArr[1][1] === "X" &&
      boardArr[2][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][0] === "O" &&
      boardArr[1][1] === "O" &&
      boardArr[2][2] === "O"
    ) {
      setWinner("PLAYER 2");
    } else if (
      boardArr[0][0] === "O" &&
      boardArr[0][1] === "O" &&
      boardArr[0][2] === "O"
    ) {
      setWinner("PLAYER2");
    } else if (
      boardArr[0][0] === "X" &&
      boardArr[0][1] === "X" &&
      boardArr[0][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][0] === "O" &&
      boardArr[0][1] === "O" &&
      boardArr[0][2] === "O"
    ) {
      setWinner("PLAYER 2");
    } else if (
      boardArr[1][0] === "O" &&
      boardArr[1][1] === "O" &&
      boardArr[1][2] === "O"
    ) {
      setWinner("PLAYER 2");
    } else if (
      boardArr[1][0] === "X" &&
      boardArr[1][1] === "X" &&
      boardArr[1][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[2][0] === "X" &&
      boardArr[2][1] === "X" &&
      boardArr[2][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[2][0] === "O" &&
      boardArr[2][1] === "O" &&
      boardArr[2][2] === "O"
    ) {
      setWinner("PLAYER2");
    } else if (
      boardArr[0][0] === "O" &&
      boardArr[0][1] === "O" &&
      boardArr[0][2] === "O"
    ) {
      setWinner("PLAYER2");
    } else if (
      boardArr[0][0] === "X" &&
      boardArr[0][1] === "X" &&
      boardArr[0][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][0] === "X" &&
      boardArr[1][0] === "X" &&
      boardArr[2][0] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][0] === "O" &&
      boardArr[1][0] === "O" &&
      boardArr[2][0] === "O"
    ) {
      setWinner("PLAYER 2");
    } else if (
      boardArr[0][1] === "O" &&
      boardArr[1][1] === "O" &&
      boardArr[2][1] === "O"
    ) {
      setWinner("PLAYER 2");
    } else if (
      boardArr[0][1] === "X" &&
      boardArr[1][1] === "X" &&
      boardArr[2][1] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][2] === "X" &&
      boardArr[1][2] === "X" &&
      boardArr[2][2] === "X"
    ) {
      setWinner("PLAYER 1");
    } else if (
      boardArr[0][2] === "O" &&
      boardArr[1][2] === "O" &&
      boardArr[2][2] === "O"
    ) {
      setWinner("PLAYER 2");
    }
  }, [boardArr]);

  const handleClick = (rowIndex: any, cellIndex: any) => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 100);
    if (boardArr[rowIndex][cellIndex]) return "";
    const value = player === "X" ? "O" : "X";
    setPlayer(value);
    const arr = [...boardArr];
    arr[rowIndex][cellIndex] = value;
    setBoardArr(arr);
  };
  return (
    <div>
      <table width="500" border={3}>
        <tbody>
          {boardArr.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((ele, cellIndex) => (
                <td
                  onClick={() => handleClick(rowIndex, cellIndex)}
                  style={{
                    height: "110px",
                    width: "110px",
                    fontSize: "50px",
                    color: `${ele === "X" ? "red" : "blue"}`,
                    fontWeight: "bold",
                  }}
                  key={cellIndex}
                >
                  {ele}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={`${player === "X" ? "make-bold" : ""}`}>Player 1: "X"</p>
      <p className={`${player === "O" ? "make-bold" : ""}`}>Player 2: "O"</p>

      <p>{winner ? `Winner is ${winner}` : ""}</p>
      <p> {counter === 9 && !winner ? "Drawn" : ""} </p>
    </div>
  );
}

export default Board;
