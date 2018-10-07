import React, { Component } from "react";
import "./Home.css";
import Card from "./Card/Card";
import axios from "axios";
import { rejects } from "assert";

var dat;
class Home extends Component {
  constructor(props) {
    super(props);
    //console.log(props.uid);
    this.state = { dat: [] };
    //console.log(this.props.uid);
  }
  componentDidMount() {
    if (this.props.uid != null)
      axios
        .post("http://localhost:55667/getUrls", {
          uid: this.props.uid
        })
        .then(res => {
          //console.log("Hellooo" + res.data);
          this.setState({ dat: res.data });
        });
  }

  render() {
    return (
      <div>
        <div className=" container">
          <div className="row">
            <div className="col ">
              {this.state.dat.map(ele => {
                return <Card title={ele.title} url={ele.url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
/*    Followers data model 
{
              id: 927156479542435800,
              name: "Prithvihv",
              profile_image_url:
                "http://pbs.twimg.com/profile_images/998745968773234688/Ey-AnT2i_normal.jpg"
            },
            {
              id: 879486493001109500,
              name: "Rahul Reddy",
              profile_image_url:
                "http://pbs.twimg.com/profile_images/959985288633348096/ROTdDcXb_normal.jpg"
            },
            {
              id: 914203924084670500,
              name: "AnonX31st",
              profile_image_url:
                "http://pbs.twimg.com/profile_images/914214295088410624/S70O3hCA_normal.jpg"
            },
            {
              id: 903245953813151700,
              name: "Gazzetta del caffè",
              profile_image_url:
                "http://pbs.twimg.com/profile_images/903559714889486336/LBjlhvjT_normal.jpg"
            },
            {
              id: 958352087208755200,
              name: "fir3wa1k3r",
              profile_image_url:
                "http://pbs.twimg.com/profile_images/965140635169701889/lG2kEWws_normal.jpg"
            }
*/
