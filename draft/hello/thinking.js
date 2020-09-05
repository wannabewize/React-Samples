class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filter) {
        console.log(`handleFilterTextChange ${filter}`);
        this.setState({ filterText: filter });
    }

    handleInStockChange(checked) {
        console.log(`handleInStockChange ${checked}`);
        this.setState({ inStockOnly: checked });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(SearchBar, { handleFilterTextChange: this.handleFilterTextChange, handleInStockChange: this.handleInStockChange }),
            React.createElement(ProductTable, {
                products: this.props.products,
                filterText: this.state.filterText,
                inStockOnly: this.state.inStockOnly
            })
        );
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
        return React.createElement(
            "form",
            null,
            React.createElement("input", { placeholder: "Search...", onChange: this.handleFilterTextChange }),
            React.createElement(
                "p",
                null,
                React.createElement("input", { type: "checkbox", onChange: this.handleInStockChange }),
                ' ',
                "Only show productsin stock."
            )
        );
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
        const rows = [];
        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category != lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
            }
            rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
            lastCategory = product.category;
        });

        return React.createElement(
            "table",
            null,
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        "Name"
                    ),
                    React.createElement(
                        "td",
                        null,
                        "Price"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                rows
            )
        );
    }
}

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        const name = product.stocked ? React.createElement(
            "td",
            null,
            product.name
        ) : React.createElement(
            "td",
            { style: { color: 'red' } },
            product.name
        );
        return React.createElement(
            "tr",
            null,
            name,
            React.createElement(
                "td",
                null,
                product.price
            )
        );
    }
}

function ProductCategoryRow(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            { colSpan: "2" },
            props.category
        )
    );
}

const products = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

ReactDOM.render(React.createElement(FilterableProductTable, { products: products }), document.getElementById('app'));