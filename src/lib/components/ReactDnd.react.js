import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Item from './Item';
import DropWrapper from './DropWrapper';


/**
 * ReactDnd takes an array of data and statuses 
 * and displays them in columns for the user to drag
 * and update their status.
 */
const ReactDnd = ({ data, statuses, setProps }) => {
  const [dragEl, setDragEl] = useState(null);

  const onDrop = (item, status) => {
    if(item.status === status){
      return;
    }

    const newItems = data
        .filter(i => i.id !== item.id)
        .concat({ ...item, status })

    setProps({ data: newItems });
  }

  const moveItem = item => {
    const itemIndex = data.findIndex(i => i.id === dragEl.id);
    const hoverIndex = data.findIndex(i => i.id === item.id);
    const newItems = [...data];

    newItems.splice(itemIndex, 1);
    newItems.splice(hoverIndex, 0, dragEl);

    setProps({ data: newItems });
  }

  const deleteItem = item => {
    const newItems = data.filter(i => i.id !== item.id);
    console.log(newItems);
    setProps({ data: newItems });
    
  }

  const removeCol = status => () => {
    if(window.confirm("Are you sure you want to delete this column of tasks?")){
      const newItems = data.filter(i => i.status !== status);
      setProps({ data: newItems });
    }
  }

  return (
    <div className="row">
      {statuses.map(status => (
        <div key={status} className="col-wrapper">
          <div className="col-group">
            <h5 className="col-header">{status.toUpperCase()}</h5>
            <p className="col-count">{data.filter(i => i.status === status).length}</p>
            <div className="col-remove">
              <IoMdCloseCircleOutline onClick={removeCol(status)}  />
            </div>
          </div>
          <DropWrapper onDrop={onDrop} status={status}>
            <div className="col">
              {data
                .filter(i => i.status === status)
                .map(i => (
                  <Item
                    key={i.id}
                    item={i}
                    deleteItem={deleteItem}
                    moveItem={moveItem}
                    setDragElement={setDragEl}
                  />
              ))}
            </div>
          </DropWrapper>
        </div>
      ))}
    </div>
  );
}

ReactDnd.defaultProps = {};

ReactDnd.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * List of status columns for each task
     */
    statuses: PropTypes.array.isRequired,

    /**
     * A list of current tasks and their status
     */
    data: PropTypes.array.isRequired,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

export default ReactDnd;