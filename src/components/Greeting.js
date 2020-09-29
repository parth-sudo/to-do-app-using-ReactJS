import React from "react";

class Greeting extends React.Component {
  render() {
    const date = new Date();
    let hours = date.getHours();
    let timeOfDay;

    const styles = {
      backgroundColor: "white",
      fontSize: "30px",
      fontFamily: "Verdana",
      textAlign: "center",
    };

    if (hours < 12) {
      timeOfDay = "Morning";
      styles.color = "#33D4FF";
    } else if (hours > 12 && hours < 17) {
      timeOfDay = "Afternoon";
      styles.color = "#33FF8A";
    } else {
      timeOfDay = "Evening";
      styles.color = "#FF5733";
    }

    return ( <h1 style={styles}> Good {timeOfDay}!</h1> )
  }
}

export default Greeting;
