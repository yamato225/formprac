import React from 'react';

export default class Form1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      usstate: props.initState,
      desc: 'This is for a text area.',
      data: {
          task_name: ''
      }
    };
    //this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    //this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onChangeFiled = this.onChangeField.bind(this);
  }

  /*onChange(e){
    console.log(e.target.value);
    this.setState({ usstate: e.target.value});
  }*/

  onSubmit(e){
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
  }

  onTextAreaChange(e){
    this.setState({ desc: e.target.value });
  }

  onChangeField(e, key) {
    console.log(key, e.target.value);
    this.setState({ [key]: e.target.value });
  }

  render() {
    var states = [
      { code: "CA", name: "California!!" },
      { code: "HI", name: "Hawaii" },
      { code: "TX", name: "Texas"},
      { code: "WA", name: "Washington"} ];
    var options = states.map(
      (n)=>(
        <option key={n.code} value={n.code}>
          {n.name}
        </option>
      )
    );
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label form="myselector">仕事の名前</label>
            <input type="text" className="form-control input-sm" placeholder="見廻り"
                value={this.state.task_name}></input>
        </div>
        <div>
            <select className="custom-select"
                defaultValue={this.state.usstate}>
                {options}
            </select>
        </div>
        <textarea
          value={this.state.desc}
          onChange={this.onTextAreaChange}/>
        <div>
          <button className="btn btn-primary" type="submit">OK</button>
        </div>
      </form>
    );
  }
}