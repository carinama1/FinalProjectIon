import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  password = "";
  username = "";
  confirmPasword = "";

  constructor() {}

  doRegister = () => {
    console.log(this.username, this.password, this.confirmPasword);
  };

  ngOnInit() {}
}
