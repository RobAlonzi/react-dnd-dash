import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';


/**
 * Each task is an item
 */
const Item = ({ item, moveItem, deleteItem, setDragElement }) => {
  const onDragStart = ({ dataTransfer, target}) => {
    dataTransfer.setData('item', JSON.stringify(item));
    setDragElement(item);
    setTimeout(() => {
      target.style.visibility = "hidden";
    }, 1)
  }

  const onDragOver = item => e => {
    moveItem(item);
    e.preventDefault();
  }

  const onDragEnter = e => e.preventDefault();
  const onDragEnd = e => e.target.style.visibility = "visible";

  const confirmDelete = item => () => {
    if(window.confirm("Are you sure you want to delete this task?")){
      deleteItem(item);
    }
  }

  return (
    <>
      <div
        className="item"
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        <div className="item-close">
          <IoMdCloseCircleOutline onClick={confirmDelete(item)} />
        </div>
        <p>{item.content}</p>
        <div className="item-icons">
          <span className="est-tag">{item.estimate}</span>
        </div>
      </div>
    </>
  )
}

Item.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * The data of this item
   */
  item: PropTypes.object,

  /**
   * Function to run when this item is being deleted
   */
  deleteItem: PropTypes.func,

  /**
   * Function to run when this item is being moved
   */
  moveItem: PropTypes.func,

  /**
   * Function to run when this item is being dragged
   */
  setDragElement: PropTypes.func
};

export default Item;