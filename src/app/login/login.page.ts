import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { CookieService } from "ngx-cookie-service";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  password = "";
  username = "";
  constructor(private router: Router, private cookie: CookieService) {}

  ngOnInit() {}

  onLogin = () => {
    this.cookie.set("__uuid__", "asd");
    console.log(this.password, this.username);
    // location.assign("/");
  };
}
