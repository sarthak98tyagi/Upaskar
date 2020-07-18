import React,{Component} from 'react';
import classes from './Navbar.module.css';
import logo from './../../images/logo.png';
import NavigationItems from './../../Component/NavigationItems/NavigationItems';
import Cover from './../../Hoc/Cover';
class Navigation extends Component 
{
    state = {
        layoverStyle: [classes.layover,classes.hide],
        showDropList: false
    }
    showLayover = () => {
        let temp=this.state.layoverStyle;
        temp.pop();
        temp.push(classes.show);
        this.setState({layoverStyle:temp})
    }
    closeLayover = () => 
    {
        let temp=this.state.layoverStyle;
        temp.pop();
        temp.push(classes.hide);
        this.setState({layoverStyle:temp})
    }
    showDrop = () => 
    {
        let temp= this.state.showDropList;
        this.setState({showDropList:!temp});
    }
    render()
    {
        return(
            <Cover>
                <main className={classes.navbar}>
                    <span className={classes.bars} onClick={this.showLayover}><i className="fas fa-bars"></i></span>

                    <div className={classes.brand}>
                        <img className={classes.logo} src={logo} alt="Upaskar Logo"/>
                        <div className={classes.title}><span>Upaskar Creations</span></div>
                    </div>
                    <div className={classes.nav}>
                        <ul>
                            <NavigationItems clicked={null} show={true} hoverable={true}></NavigationItems>
                        </ul>
                    </div> 
                </main>
                <div className={this.state.layoverStyle.join(' ')}>
                    <span className={classes.exit} onClick={this.closeLayover}><i className="fas fa-times"></i></span>
                    <div className={classes.laynav}>
                    <ul>
                            <NavigationItems clicked={this.showDrop} show={this.state.showDropList}></NavigationItems>
                    </ul>
                    </div>
                </div>
            </Cover>       
    )}
    
}

export default Navigation;