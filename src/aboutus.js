//// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
//// import React from 'react';
//// import { render } from 'react-dom';
// import './index.css';
//// import 'index.js';
//// import App from './App';
//// import reportWebVitals from './reportWebVitals';
//// import { createRoot } from 'react-dom/client';

// var linkNavbarEL = document.getElementById("root-navbar-link");

// var linkEL = document.getElementById("root-link");

//const HeaderLink = () => { 
//    return(<Navbar />)
//};


//const Linkpage = () => {
//    return (

//		<div>
//			<HeaderLink/>
//			<h1>Link Page</h1>
//		</div>
//	)
//};

//const rootLink = createRoot(linkEL);
//rootLink.render(<Linkpage />);


//var rootSixEL = document.getElementById("root6");
//var rootSevenEL = document.getElementById("root7");


//class HelloMessage extends React.Component {
//    render() {
//        return <div>Hello {this.props.name}</div>;
//    }
//}

//// render(<HelloMessage name="Taylor" />, rootSixEL);
//const root6 = createRoot(rootSixEL);
//root6.render(<HelloMessage name="Taylor" />);

//const root8EL = document.getElementById('root8');

//class Timer extends React.Component {
//    constructor(props) {
//      super(props);
//        this.state = { seconds: 0 };
//    }

//    tick() {
//        this.setState(state => ({
//            seconds: state.seconds + 1
//        }));
//    }

//    componentDidMount() {
//        this.interval = setInterval(() => this.tick(), 1000);
//    }

//    componentWillUnmount() {
//        clearInterval(this.interval);
//    }

//    render() {
//        return (
//          <div>
//            Seconds: {this.state.seconds}
//    </div>
//    );
//    }
//}

//// root.render(<Timer />);

//const root8 = createRoot(root8EL);
//root8.render(<Timer />);

//class TodoApp extends React.Component {
//    constructor(props) {
//      super(props);
//        this.state = { items: [], text: '' };
//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    render() {
//        return (
//          <div>
//            <h3>TODO</h3>
//            <TodoList items={this.state.items} />
//            <form onSubmit={this.handleSubmit}>
//              <label htmlFor="new-todo">
//                What needs to be done?
//              </label>
//              <input
//                id="new-todo"
//    onChange={this.handleChange}
//    value={this.state.text}
//  />
//  <button>
//    Add #{this.state.items.length + 1}
//    </button>
//  </form>
//</div>
//    );
//}

//handleChange(e) {
//    this.setState({ text: e.target.value });
//}

//handleSubmit(e) {
//    e.preventDefault();
//    if (this.state.text.length === 0) {
//        return;
//    }
//  const newItem = {
//      text: this.state.text,
//      id: Date.now()
//  };
//    this.setState(state => ({
//        items: state.items.concat(newItem),
//        text: ''
//    }));
//}
//}

//class TodoList extends React.Component {
//    render() {
//        return (
//          <ul>
//            {this.props.items.map(item => (
//              <li key={item.id}>{item.text}</li>
//            ))}
//    </ul>
//    );
//}
//}

//const root9EL = document.getElementById('root9');
//const root9 = createRoot(root9EL);
//root9.render(<TodoApp />);

//class MarkdownEditor extends React.Component {
//    constructor(props) {
//      super(props);
//        this.md = new Remarkable();
//        this.handleChange = this.handleChange.bind(this);
//        this.state = { value: 'Hello, **world**!' };
//    }

//    handleChange(e) {
//        this.setState({ value: e.target.value });
//    }

//    getRawMarkup() {
//        return { __html: this.md.render(this.state.value) };
//    }

//    render() {
//        return (
//          <div className="MarkdownEditor">
//            <h3>Input</h3>
//            <label htmlFor="markdown-content">
//              Enter some markdown
//            </label>
//            <textarea
//        id="markdown-content"
//        onChange={this.handleChange}
//        defaultValue={this.state.value}
//      />
//      <h3>Output</h3>
//      <div
//        className="content"
//        dangerouslySetInnerHTML={this.getRawMarkup()}
//      />
//    </div>
//      );
//    }
//}

//const root10EL = document.getElementById('root10');
//const root10 = createRoot(root10EL);
//root10.render(<MarkdownEditor />);

//function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
//}

//// OR

//class Welcome extends React.Component {
//    render() {
//        return <h1>Hello, {this.props.name}</h1>;
//    }
//}

//// Rending a Component

//const element = <Welcome name="Sara" />;

//function Welcome(props) {  return <h1>Hello, {props.name}</h1>;
//}

//const root = ReactDOM.createRoot(document.getElementById('root11'));
//const element = <Welcome name="Sara" />;
//root.render(element);


///* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//class ProductCategoryRow extends React.Component {
//    render() {
//      const category = this.props.category;
//        return (
//          <tr>
//            <th colSpan="2">
//              {category}
//            </th>
//          </tr>
//      );
//    }
//}

//class ProductRow extends React.Component {
//    render() {
//          const product = this.props.product;
//          const name = product.stocked ?
//            product.name :
//            <span style={{color: 'red'}}>
//              {product.name}
//            </span>;

//        return (
//          <tr>
//            <td>{name}</td>
//            <td>{product.price}</td>
//          </tr>
//        );
//    }
//}

//class ProductTable extends React.Component {
//    render() {
//      const rows = [];
//      let lastCategory = null;
    
//        this.props.products.forEach((product) => {
//            if (product.category !== lastCategory) {
//                rows.push(
//                  <ProductCategoryRow
//                    category={product.category}
//                    key={product.category} />
//                );
//        }
    

//    rows.push(
//      <ProductRow
//        product={product}
//              key={product.name} />
//          );
//        lastCategory = product.category;
//        });

//        return (
//          <table>
//            <thead>
//              <tr>
//                <th>Name</th>
//                <th>Price</th>
//              </tr>
//            </thead>
//            <tbody>{rows}</tbody>
//          </table>
//        );
//    }
//}

//class SearchBar extends React.Component {
//    render() {
//        return (
//              <form>
//                <input type="text" placeholder="Search..." />
//                <p>
//                  <input type="checkbox" />
//                  {' '}
//                    Only show products in stock
//                </p>
//            </form>
//        );
//    }
//}

//class FilterableProductTable extends React.Component {
//        render() {
//            return (
//              <div>
//                   <SearchBar />
//                   <ProductTable products={this.props.products} />
//              </div>
//        );
//    }
//}

//const PRODUCTS = [
//  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
//];

//var containerEL = document.getElementById('container');
 
//render(<FilterableProductTable products={PRODUCTS} />, containerEL);
//const rootCon = createRoot(containerEL);
//rootCon.render(<FilterableProductTable products={PRODUCTS} />);

