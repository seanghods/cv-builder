import { Draggable, Droppable } from 'react-beautiful-dnd';

export default function Education({
  education,
  changeInfo,
  addEdu,
  removeEdu,
}) {
  return (
    <div className="edit">
      <h4>Education</h4>
      <Droppable droppableId={'education'}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppable}
            data-dragover={
              snapshot.isDraggingOver &&
              snapshot.draggingOverWith.startsWith('edu')
            }
            data-wrongdragover={
              snapshot.isDraggingOver &&
              snapshot.draggingOverWith.startsWith('work')
            }
            className="eduList"
          >
            {education.map((obj, index) => {
              return eduList(obj, index, changeInfo, removeEdu);
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="button">
        <button
          className="add"
          data-section="education"
          onClick={e => addEdu(e)}
        >
          +
        </button>
      </div>
    </div>
  );
}

function eduList(obj, index, changeInfo, removeEdu) {
  return (
    <Draggable
      draggableId={'edu-' + index.toString()}
      index={index}
      key={index}
    >
      {(provided, snapshot) => (
        <div
          className="editflex"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-dragging={snapshot.isDragging}
          ref={provided.innerRef}
        >
          <h4 style={{ fontSize: '15px' }}>
            Education {index + 1}{' '}
            <button
              className="delete"
              data-section="education"
              onClick={e => removeEdu(e, { index })}
            >
              x
            </button>
          </h4>
          <label>School</label>
          <input
            type="text"
            name="school"
            data-section="education"
            data-index={index}
            value={obj.school}
            onChange={changeInfo}
            placeholder="..."
          />
          <label>Date Started</label>
          <input
            type="text"
            name="datestart"
            data-section="education"
            data-index={index}
            value={obj.datestart}
            onChange={changeInfo}
            placeholder="..."
          />
          <label>Date Graduated</label>
          <input
            type="text"
            name="dateend"
            data-section="education"
            data-index={index}
            value={obj.dateend}
            onChange={changeInfo}
            placeholder="..."
          />
          <label>
            <input
              type="checkbox"
              data-section="education"
              data-index={index}
              checked={obj.current}
              onChange={changeInfo}
              name="current"
            />
            Currently Studying
          </label>
          <label>Major / Focus of Study</label>
          <input
            type="text"
            name="major"
            data-section="education"
            data-index={index}
            value={obj.major}
            onChange={changeInfo}
            placeholder="..."
          />
        </div>
      )}
    </Draggable>
  );
}
