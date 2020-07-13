# AUTO GENERATED FILE - DO NOT EDIT

r_Item <- function(id=NULL, item=NULL, deleteItem=NULL, moveItem=NULL, setDragElement=NULL) {
    
    props <- list(id=id, item=item, deleteItem=deleteItem, moveItem=moveItem, setDragElement=setDragElement)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Item',
        namespace = 'react_dnd',
        propNames = c('id', 'item', 'deleteItem', 'moveItem', 'setDragElement'),
        package = 'reactDnd'
        )

    structure(component, class = c('dash_component', 'list'))
}
