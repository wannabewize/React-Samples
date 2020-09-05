class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filter) {
        console.log(`handleFilterTextChange ${filter}`);
        this.setState({filterText:filter})
    }

    handleInStockChange(checked) {
        console.log(`handleInStockChange ${checked}`);
        this.setState({inStockOnly:checked});
    }

    render() {
        return (
            <div>
                <SearchBar handleFilterTextChange={this.handleFilterTextChange} handleInStockChange={this.handleInStockChange}/>
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    />
            </div>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        // console.log('handleFilterTextChange ', e.target.value);
        this.props.handleFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        // console.log('handleInStockChange ', e.target.checked);
        this.props.handleInStockChange(e.target.checked);
    }

    render() {
        return (
            <form>
                <input placeholder="Search..." onChange={this.handleFilterTextChange}/>
                <p>
                    <input type="checkbox" onChange={this.handleInStockChange}/>
                    {' '}Only show productsin stock.
                </p>                
            </form>
        )
    }
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        
        let lastCategory = null;
        const rows = []
        this.props.products.forEach( product => {
            if ( product.name.indexOf(filterText) === -1) {
                return;
            }
            if ( inStockOnly && !product.stocked ) {
                return;
            }
            if ( product.category != lastCategory ) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
            }
            rows.push(<ProductRow product={product} key={product.name} />)
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        const product = this.props.product;
        const name = product.stocked ? 
            <td>{product.name}</td> : <td style={ {color: 'red'} }>{product.name}</td>
        return (
            <tr>
                {name}                
                <td>{product.price}</td>
            </tr>
        )
    }
}

function ProductCategoryRow(props) {
    return (
        <tr><td colSpan="2">{props.category}</td></tr>
    )
}

const products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

ReactDOM.render(<FilterableProductTable products={products} />,document.getElementById('app'));