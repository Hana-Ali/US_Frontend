import './Misc.css'

function ProductHolder(props)
{
    return(
        <div className="App">
            <a href={props.link} target="_blank">
            <div className={props.productlabel}>            
            </div>
            </a>
        </div>
    );
}

export default ProductHolder;