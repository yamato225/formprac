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
    var days = [
      {code: "0", name: "月"},
      {code: "1", name: "火"},
      {code: "2", name: "水"},
      {code: "3", name: "木"},
      {code: "4", name: "金"},
      {code: "5", name: "土"},
      {code: "6", name: "日"}
    ]
    var alldays = days.map(
      (n) => (
        <div className="form-check">
          <input className="form-check-input" name={n.code} id="radio_everymon" type="checkbox"/>
          <label className="form-check-label">{n.name}</label>
        </div>
      )
    );
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label form="work_name_form">仕事の名前は？</label>
            <input type="text" className="form-control input-sm" placeholder="見廻り"
                value={this.state.task_name}></input>
        </div>
        <div className="form-group">
          <label form="work_period_form">いつやる？</label>
          <div className="form-check">
            <input className="form-check-input" name="radio" id="radio_everyday" type="radio"/>
            <label className="form-check-label">毎日</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="radio" id="radio_everyweek" type="radio"/>
            <label className="form-check-label">毎週
            <div className="form-check form-check-inline">
              {alldays}
            </div></label>
          </div>
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