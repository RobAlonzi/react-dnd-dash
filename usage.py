import json
import react_dnd
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from data.index import data

statuses = ['open', 'in progress', 'done']

app = dash.Dash(__name__)

app.layout = html.Div([
    react_dnd.ReactDnd(
        id="react-dnd",
        data=data,
        statuses=statuses
    ),
    html.Div(id='output')
])

@app.callback(
    Output(component_id='output', component_property='children'),
    [Input(component_id='react-dnd', component_property='data')]
)

def display_output(value):
    return json.dumps(value)

if __name__ == '__main__':
    app.run_server(debug=True)
