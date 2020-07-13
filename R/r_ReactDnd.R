# AUTO GENERATED FILE - DO NOT EDIT

r_ReactDnd <- function(id=NULL, statuses=NULL, data=NULL) {
    
    props <- list(id=id, statuses=statuses, data=data)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ReactDnd',
        namespace = 'react_dnd',
        propNames = c('id', 'statuses', 'data'),
        package = 'reactDnd'
        )

    structure(component, class = c('dash_component', 'list'))
}
