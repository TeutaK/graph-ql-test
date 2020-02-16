import React, {Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import SearchInput from "./search-input";
// import 'bulma';


export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            keywords: [],
            employees: [
                {
                    id: 1,
                    name: "Teuta Koraqi",
                    technologies: ["react", "javascript", "html", "css"],
                },
                {
                    id: 2,
                    name: "Mergim Uka",
                    technologies: ["angular", "javascript", "laravel", "css"],
                },
                {
                    id: 3,
                    name: "Danny Håkanson",
                    technologies: ["gatsby", "javascript", "css", "css modules"],
                }
            ],
            filteredEmployees: [],

        };

        this.inputElement = createRef();
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    };

    addItem = (e) => {
        e.preventDefault();
        const inputValue = this.state.inputValue;
        let keywords = this.state.keywords;

        if(inputValue !== "") {
            keywords.push(inputValue);
           this.setState({
               keywords,
               inputValue: ""
           });
        }
    };

    removeItem = (item) => {
        const keywords = this.state.keywords;

        keywords.filter((el, i) => {
            if(el === item) {
                keywords.splice(i, 1);
                return true;
            }
        });
        this.setState({
            keywords
        });
    };

    handleOnEnter = (event) => {
        if(event.key === 'Enter') {
            const {employees, inputValue } = this.state;
            this.addItem(event);
            const filteredEmployees = employees.filter(employee => {
                return employee.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 ;
            });

            this.setState({
                employees: filteredEmployees
            })
        }
    };

    render() {
        const { keywords, inputValue, employees } = this.state;

        return(
        <div className="content">
            <div className="container">
                <section className="section">
                    <SearchInput ref={this.inputElement}
                                 value={inputValue}
                                 placeholder="Search by name or role..."
                                 onChange={this.handleInputChange}
                                 onkeydown={this.handleOnEnter}/>
                </section>

                {/*Keywords*/}
                <section className="section">
                  <ul>
                      {
                          keywords.map(item => (
                              <li key={item}>
                                  {item}
                                  <span onClick={() => this.removeItem(item)}>
                                      Delete
                                  </span>
                              </li>
                          ))
                      }
                  </ul>
                </section>
                <hr />
                {/*Employees*/}
                <section className="section">
                    <ul>
                        {
                            employees.map(employee => (
                                <li key={employee.id}>
                                   <h4>{employee.name}</h4>
                                    <strong>Technologies</strong>
                                    <ul>
                                        {
                                            employee.technologies.map(technology => (
                                                <li key={technology}>{technology}</li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>
        </div>
      )
    }
}