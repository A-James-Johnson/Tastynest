import React from "react";

class Profileclass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count:0,
      count1:1
    }
  }
  render() {
    const { name, colour } = this.props;
    const {count,count1}=this.state;
    
    return (
      <>
        <h1>Profile class component</h1>
        <h2>name:{name}</h2>
        <h2>colour:{colour}</h2>
        <h3>count:{count}</h3>
        <h3>count1:{count1}</h3>
        <button onClick={()=> this.setState({count: count+1,count1:count1*2})}> Update count</button>
        
        
      </>
    );
  }
}
export default Profileclass;
