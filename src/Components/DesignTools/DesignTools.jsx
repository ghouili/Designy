import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaImage, FaFont, FaRegSmileBeam } from "react-icons/fa";

const DesignTools = () => {
  const [shirtImage, setShirtImage] = useState(null);
  const [elements, setElements] = useState([]);

  const handleImageUpload = (event) => {
    setShirtImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleTextAdd = () => {
    setElements([...elements, { type: "text", content: "Enter text here" }]);
  };

  const handleImageAdd = () => {
    setElements([...elements, { type: "image", content: "" }]);
  };

  const handleIconAdd = () => {
    setElements([...elements, { type: "icon", content: <FaRegSmileBeam /> }]);
  };

  const handleElementUpdate = (index, content) => {
    const updatedElements = [...elements];
    updatedElements[index].content = content;
    setElements(updatedElements);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundImage: `url(${shirtImage})`,
          backgroundSize: "cover",
        }}
      >
        {elements.map((element, index) => (
          <Draggable key={index} draggableId={index.toString()} index={index}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {element.type === "text" && (
                  <input
                    type="text"
                    value={element.content}
                    onChange={(event) =>
                      handleElementUpdate(index, event.target.value)
                    }
                  />
                )}
                {element.type === "image" && (
                  <img src={element.content} alt="Design element" />
                )}
                {element.type === "icon" && element.content}
              </div>
            )}
          </Draggable>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input type="file" onChange={handleImageUpload} />
        <button onClick={handleTextAdd}>
          <FaFont /> Add Text
        </button>
        <button onClick={handleImageAdd}>
          <FaImage /> Add Image
        </button>
        <button onClick={handleIconAdd}>Add Icon</button>
      </div>
    </div>
  );
};

export default DesignTools;
