import './HomePage.scss';
import { Component } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProgressBar from '../../components/Progress/ProgressBar';
import BreatheCard from '../../components/BreatheCard/BreatheCard';
import StrainCard from "../../components/StrainCard/StrainCard";

export default class HomePage extends Component {
    state = {
        isBreatheCard: true,
    }

    handleClick = () => {
        const change = !this.state.isBreatheCard
        this.setState({isBreatheCard: change})
    }

  render() {
    return(
        <div>
            <Header />
            <Navbar />
            <ProgressBar />
            {this.state.isBreatheCard 
                ? <BreatheCard 
                    title={"Breathwork Challenge"}
                    text={"Often forgotten, but synchronized breathing can help you relax instantly!"}
                    handleClick={this.handleClick}/> 
                : <StrainCard
                    title={"Optimal Strain"}
                    text={"You're at a balanced level of Strain for today. Going above 18.9 will promote fitness gains but may diminish your body’s ability to recover fully overnight. "}
                    handleClick={this.handleClick}/>}
        </div>
        )
  }
};