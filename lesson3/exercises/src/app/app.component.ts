import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";

  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
    }
    this.takeOffEnabled = false;
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === "up") {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height += 10000;
    } else if (direction === "down") {
      let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
      rocketImage.style.bottom = movement;
      this.height -= 10000;
    } else if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) - 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
  }

  handleLand(rocketImage) {
    rocketImage.style.bottom = "0px";
    this.message = "Space shuttle has landed.";
    this.height = 0;
    this.takeOffEnabled = true;
  }

  handleMissionAbort(rocketImage) {
    rocketImage.style.bottom = "0px";
    this.message = "Mission aborted";
    this.height = 0;
    this.takeOffEnabled = true;
  }

  warning() {
    if (
      this.width > 250000 ||
      this.width < -1000 ||
      this.height < 20000 ||
      this.height > 320000
    ) {
      this.color = "red";
    } else {
      this.color = "blue";
    }
    console.log(this.width);
    console.log(this.height);
  }
}
