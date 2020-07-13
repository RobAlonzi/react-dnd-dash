% Auto-generated: do not edit by hand
\name{r_Item}

\alias{r_Item}

\title{Item component}

\description{
Each task is an item
}

\usage{
r_Item(id=NULL, item=NULL, deleteItem=NULL, moveItem=NULL,
setDragElement=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{item}{Named list. The data of this item}

\item{deleteItem}{Function to run when this item is being deleted}

\item{moveItem}{Function to run when this item is being moved}

\item{setDragElement}{Function to run when this item is being dragged}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

