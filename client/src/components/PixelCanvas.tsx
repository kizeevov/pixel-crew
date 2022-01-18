import React, { MouseEvent } from "react";
import "./PixelCanvas.css";

function PixelCanvas() {
    const horizontalPixelCount = 64;
    const verticalPixelCount = 64;
    const pixelCount = horizontalPixelCount * verticalPixelCount;

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Do something
        var positionX = e.currentTarget.getAttribute("position-x");
        var positionY = e.currentTarget.getAttribute("position-y");
        console.log(positionX);
        console.log(positionY);
    };

    const pixelList = [];
    for (let hi = 0; hi < horizontalPixelCount; hi++) {
        for (let vi = 0; vi < verticalPixelCount; vi++) {
            pixelList.push(
                <button
                    onClick={handleMouseEvent}
                    position-x={`${hi}`}
                    position-y={`${vi}`}
                />
            );
        }
    }

    const listStylus: React.CSSProperties = {
        gridTemplateColumns: `repeat(${horizontalPixelCount}, 1fr)`,
        gridTemplateRows: `repeat(${verticalPixelCount}, 1fr)`,
    };

    return (
        <div className="cp-pixel-canvas" style={listStylus}>
            {pixelList}
        </div>
    );
}

export default PixelCanvas;
