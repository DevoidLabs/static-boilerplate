

function LogoImg(props) {
    // Props = , pageName, filename, imageId
    return <img id={props.imageId} src={`/pages/${props.pageName}/assets/${props.filename}`} />
}


class Home extends React.Component{
    render() {
        let style = {
            height: 50,
            width: 50
        }
        return (
            <div id="header-container">
              <h1 id="main-header">Devoid Labs</h1>

              <LogoImg imageId="logo-img" pageName="home" filename="MainLogo.png" />

              <button id="docs-btn">Documentation</button>  
            </div>
        )
    }
}


ReactDOM.render(
    <Home />,
    document.getElementById('container')
)